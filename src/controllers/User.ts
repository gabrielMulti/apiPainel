import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import generateToken from '../functions/generateToken';
import sendEmail from '../functions/sendEmail';
const prisma = new PrismaClient()
import * as crypto from "crypto";
import emailForgotPassword from "../public/forgotPassword"
import confirmationEmail from "../public/confirmationEmail"
import htmlResetPassword from "../public/resetPassword"
import path from 'path';
import jwt from 'jsonwebtoken'


const emails: any = {
    forgot: {
        subject: 'Esqueci minha senha',
        text: 'Esqueci minha senha',
        func: emailForgotPassword
    },
    confirmation: {
        subject: 'confirmação de email',
        text: 'confirmação de email',
        func: confirmationEmail
    }
}


async function createUser(req: any, res: any) {
    const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z]).*$/

    try {
        if(!regex.test(req.body.password)) return res.status(400).json({ err: 'passoword not valid' });


        const userBody: any = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password ? await bcrypt.hash(req.body.password, 10) : false
        }

        for (const key in userBody) {
            if (Object.prototype.hasOwnProperty.call(userBody, key)) {
                const element = userBody[key];
                if (!element) {
                    return res.status(500).json({
                        err: `${key} is required`
                    })
                }
            }
        }

        const { name, email, createdAt, id } = await prisma.user.create({
            data: { ...userBody }
        })

        const token = generateToken({ id }, 86400)


        res.json({ name, email, createdAt, id, token })
    } catch (err: any) {
        if(err?.meta?.target === "User_email_key") {
            return res.status(500).json({ err: 'E-mail already registered' })
        }

        res.status(500).json(err)
    }
}

async function authenticate(req: any, res: any) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (!user) return res.status(400).json({ err: 'Email or password invalid' });

    if(!user.active) return res.status(400).json({ err: 'Email of user not confirmed' });

    if (!await bcrypt.compare(password, user.password)){
        return res.status(400).json({ err: 'Email or password invalid'});
    }


    const token = generateToken({ id: user.id }, 86400)

    res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        createAt: user.createdAt,
        token
    })

}

async function sendEmailConfirmation(req: any, res: any) {
    const { email } = req.body;
    const { type } = req.query;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) return res.status(400).json({ err: 'User not found' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                tokenConfirmation: token,
                tokenConfirmationExpiration: now
            }
        })

        sendEmail({
            from: 'multicoisas.com.br' + '<' + 'lojaonline@multicoisas.com.br' + '>',
            to: email,
            html: emails[type].func(email, token),
            subject: emails[type].subject,
            text: emails[type].text
        })

        res.status(200).json({
            status: "ok"
        })
    } catch (error) {
        res.status(500).json({ err: 'Erro on forgot password' })
    }
}

async function resetPassword(req: any, res: any) {
    const { email, password, token, confirmPassword} = req.body
    const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.*[a-z]).*$/

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(!regex.test(password)) return res.status(400).json({ err: 'passoword not valid' });

        if(password !== confirmPassword) return res.status(400).json({ err: 'passoword not equal' });

        if (!user) return res.status(400).json({ err: 'User not found' });

        if (token !== user.tokenConfirmation) return res.status(400).json({ err: 'token invalid' })

        const now = new Date();

        const tokenExpiration: any = user.tokenConfirmationExpiration

        if (now > tokenExpiration) {
            return res.status(400).json({ err: 'token expired' })
        }

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                password: await bcrypt.hash(password, 10)
            }
        })

        res.status(200).json({
            status: 'ok',
            message: 'password updated successfully'
        })

    } catch (error) {
        return res.json({ err: 'Error by reset password' })
    }
}

async function activeUser(req: any, res: any) {
    const { email, token } = req.query;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) return res.status(400).json({ err: 'User not found' });

        if (token !== user.tokenConfirmation) return res.status(400).json({ err: 'token invalid' })

        const now = new Date();

        const tokenExpiration: any = user.tokenConfirmationExpiration

        if (now > tokenExpiration) {
            return res.status(400).json({ err: 'token expired' })
        }

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                active: true
            }
        })

        res.sendFile(path.join(__dirname, '../public/emailConfirmation.html'));

    } catch (error) {
        return res.json({ err: 'Error by reset password' })
    }
}

async function renderResetPassword(req: any, res: any) {

    const { email, token } = req.query;

    res.send(htmlResetPassword(email, token));
}

async function getUser(req: any, res: any) {

    try {
        const { email, token } = req.query;
        const secret: any = process.env.HASH_AUTH


        const resJwt: any = jwt.verify(token, secret, (err: any, decoded: any) => { if (err) {
            return err
        } })

        if (resJwt) {
            return res.status(401).json({ err: 'Token Invalid' });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                email: true
            }
        })

        if (!user) return res.status(400).json({ err: 'User not found' });

        return res.json({
            ...user
        });
    } catch (error) {
        console.log(error);
    }

}

const user = {
    createUser,
    authenticate,
    sendEmailConfirmation,
    resetPassword,
    activeUser,
    renderResetPassword,
    getUser
}

export default user

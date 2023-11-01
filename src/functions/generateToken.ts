import jwt from 'jsonwebtoken'

export default (id: any, expiresIn: any) => {
    const secret: any = process.env.HASH_AUTH

    return jwt.sign(id, secret, {
        expiresIn
    })
}
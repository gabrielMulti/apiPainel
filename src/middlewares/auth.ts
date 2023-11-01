import jwt from 'jsonwebtoken'


export default (req: any, res: any, next: any) => {
    const headerToken = req.headers.authorization;

    if(!headerToken) return res.status(401).json({ err: 'No token provided' })

    const splitToken = headerToken.split(' ');

    if(splitToken.length !== 2) {
        return res.status(401).json({ err: 'Token Error' })
    }

    const [ bearer, token ] = splitToken;

    if(!/^Bearer$/i.test(bearer)) {
        return res.status(401).json({ err: 'Token Error' })
    }

    const secret: any = process.env.HASH_AUTH


    jwt.verify(token, secret, (err: any, decoded: any) => {
        if(err) return res.status(401).json({ err: 'Token Invalid' })

        req.userId = decoded.id;
        return next();
    })
}
import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta'

export const protect = (req: Request, res: Response, next: NextFunction): void => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token){
        res.status(401).json({message: 'Não autorizado'})
        return 
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded 
        next()
    } catch(e){
        res.status(401).json({message: 'Não autorizado'})
    }
}
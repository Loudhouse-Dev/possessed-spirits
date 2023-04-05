import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const comparePasswords = (password: string | Buffer, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string | Buffer) => {
  return bcrypt.hash(password, 10)
}

export const createJWT = (user: { id: string; username: string }) => {
  const token = jwt.sign({
      id: user.id,
      username: user.username
    }, 
    process.env.JWT_SECRET!
  )
  return token
}

export const protect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({message: 'not authorized'})
    return
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401)
    res.json({message: 'Invalid Token'})
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = user
    next()
  } catch (e) {
    console.error(e)
    res.status(401)
    res.json({message: 'Invalid Token'})
    return
  }
}
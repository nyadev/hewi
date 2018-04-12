import Debug from 'debug';
import { secret } from '../config'
import jwt from 'jsonwebtoken'

const debug = new Debug('Hewi:auth')

export const users = [
  {
    email: 'ernestomoor@hewi.com',
    password: '123456',
    firstName: 'Ernesto',
    pName: 'ApellidoPaterno',
    mName: 'ApellidoMaterno',
    curp: 'CURP',
    userType: 'therapist'
  }
]

export const findUserByEmail = e => users.find(({ email }) => email === e)

export const required = (req, res, next) => {
  jwt.verify(req.query.token , secret, (err, token) => {
    if (err) {
      debug('JWTF was not encrypted with our secret')
      return res.status(401).json({
        message: 'Unauthorized',
        errror: err
      })
    }

    debug(`Token verified ${token}`)
    req.user = token.user
    next()
  })
}

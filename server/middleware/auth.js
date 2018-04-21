import Debug from 'debug';
import { secret } from '../config'
import jwt from 'jsonwebtoken'

const debug = new Debug('Hewi:auth')

export const users = [
  {
    email: 'ernestomoor@email.com',
    password: '123456',
    firstName: 'Ernesto',
    pName: 'Moreno',
    mName: 'Soto',
    curp: 'CURP',
    userType: 'admin'
  },
  {
    email: 'axel_cuevaso@hotmail.com',
    password: '123456',
    firstName: 'Axel',
    pName: 'Cuevas',
    mName: 'Olvera',
    curp: 'CUOI001111HDFVLNA5',
    userType: 'therapist'
  },
  {
    email: 'axelcuevas321@gmail.com',
    password: '123456',
    firstName: 'Andrés',
    pName: 'Lopez',
    mName: 'Esquivel',
    curp: 'CURPNOREALPRUEBAA',
    userType: 'patient'
  },
]

export const findUserByEmail = e => users.find(({ email }) => email === e)

export const required = (req, res, next) => {
  jwt.verify(req.query.token , secret, (err, token) => {
    if (err) {
      debug('JWTF was not encrypted with our secret')
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      })
    }

    debug(`Token verified ${token}`)
    req.user = token.user
    next()
  })
}

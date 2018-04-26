import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { findUserByEmail, users } from '../middleware'

const app = express.Router()
const debug = new Debug('Hewi:auth')

function comparePasswords(providedPassword, userPassword) {
  return providedPassword === userPassword
}

app.post('/signin', (req, res, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)

  if (!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailed(res)
  }

  if (!comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailed(res, 'El correo y la contraseña no conciden')
  }

  const token = createToken(user)
  res.status(200).json({
    message: 'Login succeded',
    token,
    email: user.email,
    firstName: user.firstName,
    pName: user.pName,
    mName: user.mName,
    userType: user.userType,
    therapistInfo: user.therapistInfo,
    patientInfo: user.patientInfo
  })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })

app.post('/signup', (req, res) => {
  const { email, password, firstName, pName, mName, curp, userType, therapistInfo, patientInfo } = req.body
  const user={
    email,
    password,
    firstName,
    pName,
    mName,
    curp,
    userType,
    therapistInfo,
    patientInfo
  }
   debug(`Creating new user: ${user}`)
   users.push(user)
   const token = createToken(user)
   res.status(201).json({
     message: 'User saved',
     token,
     email: user.email,
     firstName: user.firstName,
     pName: user.pName,
     mName: user.mName,
     curp: user.curp,
     userType: user.userType,
     therapistInfo: user.therapistInfo,
     patientInfo: user.patientInfo
   })
})

function handleLoginFailed(res, message) {
  return res.status(401).json({
    message: 'Login failed',
    error: message || 'Email and password don\'t match'
  })
}

export default app

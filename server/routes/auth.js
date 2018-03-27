import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'

const app = express.Router()
const debug = new Debug('Hewi:auth')

const secret = 'miclavesecreta';

const users = [
  {
    _id: 123,
    email: 'ernestomoor@hewi.com',
    password: '123456',
    username: 'ernestomoor',
    firstName: 'Ernesto',
    pName: 'ApellidoPaterno',
    mName: 'ApellidoMaterno',
    curp: 'CURP',
    userType: 'admin'
  }
]

const findUserByEmail = e => users.find(({ email }) => email === e)

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
    userId: user._id,
    username: user.username,
    firstName: user.firstName,
    pName: user.pName,
    mName: user.mName,
    email: user.email,
    curp: user.curp,
    userType: user.userType
  })
})

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })

app.post('/registertherapist', (req, res) => {
  const { lNameF, lNameM, nome, phone, cellphone, username, password, address, extnumber, intnumber, colonia, delegacion, postalcode, state, career, posgrade } = req.body
  const user={
    _id : +new Date(),
    lNameF,
    lNameM,
    nome,
    phone,
    cellphone,
    username,
    password,
    address,
    extnumber,
    intnumber,
    colonia,
    delegacion,
    postalcode,
    state,
    career,
    posgrade,
  }
   debug(`Creating new user: ${user}`)
   users.push(user)
   const token = createToken(user)
   res.status(201).json({
     message: 'User saved',
     token,
     userId: user._Id,
     lNameF,
     nome,
     username
   })
})

function handleLoginFailed(res, message) {
  return res.status(401).json({
    message: 'Login failed',
    error: message || 'Email and password don\'t match'
  })
}

export default app

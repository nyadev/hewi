import express from 'express'

const app = express.Router()


const patient = {
  _id: +new Date(),
  email: 'ernestomoor@hewi.com',
  password: '123456',
  username: 'ernestomoor',
  firstName: 'Ernesto',
  pName: 'ApellidoPaterno',
  mName: 'ApellidoMaterno',
  curp: 'CURP',
  userType: 'admin'
}

const patients = new Array(10).fill(patient)

app.get('/', (req, res) => res.status(200).json(patients))

export default app

import express from 'express'

const app = express.Router()

const totalDate = new Date();

const session = {
  id: 1,
  patient_id: 1,
  therapist_id: 1,
  curp: 'CURP',
  date: totalDate.toLocaleDateString('en-US'),
  time: totalDate.toLocaleTimeString(),
  sessionnumber: 3,
  notes: 'Esto sólo son observaciones de prueba para ver como es que se acomoda en la tabla',
}

const sessions = new Array(10).fill(session)

app.get('/', (req, res) => res.status(200).json(sessions))

app.post('/',(req , res) =>{
    const session = req.body
    session._id = 1
    session.user={
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
    session.createdAt = new Date()
    sessions.push(session)
    res.status(201).json(session)
})

export default app

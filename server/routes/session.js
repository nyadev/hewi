import express from 'express'

const app = express.Router()

const totalDate = new Date();

const session = {
  id: 1,
  patient_id: 10,
  therapist_id: 1,
  curp: 'CURP',
  date: totalDate.toLocaleDateString('en-US'),
  time: totalDate.toLocaleTimeString(),
  number: 3,
  notes: 'Esto sólo son observaciones de prueba para ver como es que se acomoda en la tabla',
}

const sessions = new Array(10).fill(session)

app.get('/', (req, res) => res.status(200).json(sessions))

app.post('/',(req , res) =>{
    const session = req.body
    session.id = 2
    session.patient_id = 10
    session.therapist_id = 1
    session.number = 4
    sessions.push(session)
    res.status(201).json(session)
})

export default app

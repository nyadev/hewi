import express from 'express'

const app = express.Router()

const totalDate = new Date();

const session = {
  id: 1,
  curpt: 'CURPT',
  curpp: 'CURP',
  date: totalDate.toLocaleDateString('en-US'),
  time: totalDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
  number: 3,
  notes: 'Esto sólo son observaciones de prueba para ver como es que se acomoda en la tabla',
}

const sessions = new Array(2).fill(session)

app.get('/', (req, res) => res.status(200).json(sessions))

app.post('/',(req , res) =>{
    const session = req.body
    session.id = 2
    sessions.push(session)
    res.status(201).json(session)
})

export default app

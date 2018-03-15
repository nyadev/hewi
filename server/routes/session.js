import express from 'express'

const app = express.Router()

const totalDate = new Date();

const session = {
  id: 1,
  curp: 'CURP',
  date: totalDate.toLocaleDateString('en-US'),
  time: totalDate.toLocaleTimeString(),
  sessionnumber: 3,
  notes: 'obs'
}

const sessions = new Array(10).fill(session)

app.get('/', (req, res) => res.status(200).json(sessions))

app.get('/:date', (req, res) => res.status(200).json(session))

export default app

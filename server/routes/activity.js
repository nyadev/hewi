import express from 'express'

const app = express.Router()

const activity = {
  id_user: 10,
  type: 0,
  numberOf: 1;
  level: 4,
  corrects: 10,
  fails: 2,
  date: new Date
}

const activities = new Array(10).fill(activity)

app.get('/', (req, res) => res.status(200).json(activity))

app.post('/',(req , res) =>{
    const activity = req.body
    activity.id_user = 10
    activity.ntry = 2
    sessions.push(session)
    res.status(201).json(session)
})

export default app

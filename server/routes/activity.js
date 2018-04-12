import express from 'express'
import {
  required,
  activitiesMiddleware,
  activityMiddleware
} from '../middleware'

const app = express.Router()

app.get('/:curp', activityMiddleware, (req, res) => res.status(200).json(req.activities))

app.post('/', required, activitiesMiddleware, (req , res) =>{
    const activity = req.body
    activity.date = new Date()
    req.activities.push(activity)
    res.status(201).json(activity)
})

export default app

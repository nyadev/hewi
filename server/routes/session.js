import express from 'express'
import {
  required,
  sessionMiddleware,
} from '../middleware';

const app = express.Router()

app.get('/', sessionMiddleware, (req, res) => res.status(200).json(req.sessions))

app.post('/', required, sessionMiddleware, (req , res) =>{
    const session = req.body
    session.id = 2
    req.sessions.push(session)
    res.status(201).json(session)
})

export default app

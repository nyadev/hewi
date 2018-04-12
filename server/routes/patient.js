import express from 'express'
import { patientsMiddleware } from '../middleware'

const app = express.Router()

app.get('/', patientsMiddleware, (req, res) => res.status(200).json(req.users))

export default app

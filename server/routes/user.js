import express from 'express'
import { patientsMiddleware, patientMiddleware, therapistsMiddleware, therapistMiddleware } from '../middleware'

const app = express.Router()

app.get('/patients', patientsMiddleware, (req, res) => res.status(200).json(req.users))
app.get('/patients/:curp', patientMiddleware, (req, res) => res.status(200).json(req.user))

app.get('/therapists', therapistsMiddleware, (req, res) => res.status(200).json(req.users))
app.get('/therapists/:curp', therapistMiddleware, (req, res) => res.status(200).json(req.user))

export default app

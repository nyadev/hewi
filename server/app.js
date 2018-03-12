import express from 'express'
import { session } from './routes'

const app = express()

app.get('/', (req, res) => res.send('Hola desde express'))

app.use('/api/sessions', session)

export default app

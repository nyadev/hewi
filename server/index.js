import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const  PORT = 3000 || process.env.PORT
const debug = new Debug('hewi:root')

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})

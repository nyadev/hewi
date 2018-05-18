import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl, port } from './config'

const debug = new Debug('hewi:root')

app.listen(port, () => {
  debug(`Server running at port ${port}`)
})

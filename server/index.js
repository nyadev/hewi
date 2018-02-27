import http from 'http'
import Debug from 'debug'
import app from './app'

const  PORT = 3000 || process.env.PORT
const debug = new Debug('hewi:root')

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})

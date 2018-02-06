import http from 'http'
import Debug from 'debug'

const  PORT = 3000 || process.env.PORT
const debug = new Debug('hewi:root')

const app = http.createServer((req, res) => {
    debug('New Request')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hola desde Hewi')
    res.end()
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})

import express from 'express'
import { session } from './routes'

const app = express()

if(process.env.NODE_ENV === 'development'){
  app.use((req,res,next)=>{
    res.setHeader('Acces-Contol-Allow-Origin','*')
    res.setHeader('Acces-Contol-Allow-Headers','Origin, X-Request-With,Content-Type, Accept' )
      res.setHeader('Acces-Contol-Allow-Methods','POST,GET, PATCH,DELETE,OPTIONS')
      next()
  })
}

app.get('/', (req, res) => res.send('Hola desde express'))

app.use('/api/sessions', session)

export default app

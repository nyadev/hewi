import express from 'express'
import { session } from './routes'

const app = express()

if(process.env.NODE_ENV === 'development'){
  app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Request-With, Content-Type, Accept' )
      res.setHeader('Access-Control-Allow-Methods','POST, GET, PATCH, DELETE, OPTIONS')
      next()
  })
}

app.use('/api/sessions', session)

export default app

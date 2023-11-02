import express from 'express'
import dotenv from 'dotenv'
import { userRouter } from './routers/index.js'

dotenv.config()
const app = express()

app.use(express.json())

// routers
app.use('/users', userRouter)

export default app

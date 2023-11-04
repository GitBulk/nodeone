import express from 'express'
import dotenv from 'dotenv'
import { userRouter } from './routers/index.js'
import verifyJwtToken from './helpers/authentication.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(verifyJwtToken)
// routers
app.use('/users', userRouter)

export default app

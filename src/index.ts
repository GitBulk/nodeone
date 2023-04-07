import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'

dotenv.config()
const PORT = 3001
const app = express()

app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)
server.listen(PORT, () => {
  console.log("MONGO_URL", process.env.MONGO_URL)
  console.log("server is running")
})


mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))
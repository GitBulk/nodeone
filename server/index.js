import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import workoutRoutes from './routes/workout.js';
import mongoose from 'mongoose'

dotenv.config()
const app = express()
app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutRoutes)

app.get("/", (request, response) => {
  response.json({ message: 'welcome to the app' })
})

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('server is running,', process.env.PORT)
  })
}).catch(error => {
  console.log(error)
})

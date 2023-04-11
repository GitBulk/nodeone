import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())


app.get("/", (request, response) => {
  response.json({ message: 'welcome to the app' })
})

app.listen(process.env.PORT, () => {
  console.log('server is running,', process.env.PORT)
})

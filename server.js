import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3002
app.listen(port, async (req, res) => {
  console.log(`listening on port ${port}`)
})
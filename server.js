import app from './src/app.js'
import connectDb from './src/database/database.js'
const port = process.env.PORT || 3002
app.listen(port, async (req, res) => {
  connectDb()
  console.log(`Listening on port ${port}`)
})
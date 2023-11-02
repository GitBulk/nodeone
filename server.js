import app from './src/app.js'
import connect from './src/database/database.js'
const port = process.env.PORT || 3002
app.listen(port, async (req, res) => {
  connect()
  console.log(`Listening on port ${port}`)
})
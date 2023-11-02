import app from './src/app.js'

const port = process.env.PORT || 3002
app.listen(port, async (req, res) => {
  console.log(`Listening on port ${port}`)
})
import app from './src/app.js'
const PORT = 4231
const server = app.listen(PORT, () => {
  console.log(`hello nodejs, port ${PORT}`)
})

// process.on('SIGINT', () => {
//   server.close(() => console.log('exit server express, bye'))
// })
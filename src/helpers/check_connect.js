import mongoose from 'mongoose'
import os from 'os'
import process from 'process'

const countConnection = () => {
  const numOfConnection = mongoose.connections.length
  console.log(`Number of conenction: ${numOfConnection}`)
}
const checkOverload = () => {
  setInterval(() => {
    const numOfConnection = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    const maxConnection = numCores * 2

    console.log(`Active connection ${numOfConnection}`)
    console.log(`Memory usage ${memoryUsage / 1024 / 1024} MB`)

    if (numOfConnection > maxConnection) {
      // notify to dev team
      console.log('connection overload detected')
    }
  }, 5000)
}
export { countConnection, checkOverload }
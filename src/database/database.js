import mongoose from 'mongoose'
import StandardError from '../exceptions/standard-error.js'

async function connectDb() {
  try {
    let connection = await mongoose.connect(process.env.DB_CONNECTION_STRING)
    print('connect mongodb ok', OutputType.SUCCESS)
    return connection
  } catch (error) {
    throw new StandardError(error.message)
  }
}

export default connectDb

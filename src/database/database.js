import mongoose from 'mongoose'
import { print, OutputType } from '../helpers/print.js'

async function connect() {
  try {
    let connection = await mongoose.connect(process.env.DB_CONNECTION_STRING)
    print('connect mongodb ok', OutputType.SUCCESS)
    return connection
  } catch (error) {
    throw new Error(error.message)
  }
}

export default connect

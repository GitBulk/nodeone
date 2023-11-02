import mongoose from 'mongoose'

async function connect() {
  try {
    let conenction = await mongoose.connect(process.env.DB_CONNECTION_STRING)
    console.log('connect mongodb ok')
  } catch (error) {
    throw new Error(error.message)
  }
}

export default connect

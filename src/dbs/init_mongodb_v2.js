import mongoose from 'mongoose'
import { countConnection } from '../helpers/check_connect.js'

const connectionString = 'mongodb://localhost:27017/shop_dev'

class Database {
  constructor() {
    if (!Database.instance) {
      Database.instance = this
    }

    return Database.instance
  }

  async connect(_type = 'mongodb') {
    if (1 == 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true})
    }

    await mongoose.connect(connectionString, { maxPoolSize: 50 })
    console.log('Connected mongodb successully')
    countConnection()
  }

  async close() {
    await mongoose.connection.close()
  }

  async getDb() {
    if (!mongoose.connection.readyState) {
      await this.connect()
    }

    return mongoose.connection.db
  }
}

const instanceMongodb = new Database()
export default instanceMongodb

import mongoose from 'mongoose'
import { countConnection } from '../helpers/check_connect.js'

const connectionString = 'mongodb://localhost:27017/shop_dev'
class Database {
  constructor() {
    this.connect()
  }

  connect(_type = 'mongodb') {
    if (1 == 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true})
    }
    mongoose.connect(connectionString, {
      maxPoolSize: 50
    }).then(_ => {
      console.log('Connected mongodb successully', countConnection())
    }).catch(err => console.log(err))
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
export default instanceMongodb

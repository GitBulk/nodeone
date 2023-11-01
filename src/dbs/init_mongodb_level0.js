import mongoose from 'mongoose'
const connectionString = 'mongodb://localhost:27017/shop_dev'
mongoose.connect(connectionString).then(_ => console.log('Connected mongodb successully')).catch(err => console.log(err))
// dev
if (1 == 0) {
  mongoose.set('debug', true)
  mongoose.set('debug', { color: true})
}

export default mongoose

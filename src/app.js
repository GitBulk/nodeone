// const express = require('express')
// const app = express()
// module.exports = app

// es6
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
// import _ from './dbs/init_mongodb_level0.js'
import instanceMongodb from './dbs/init_mongodb_v2.js'

const app = express()
// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init db
const db = await instanceMongodb.getDb()

import { checkOverload } from './helpers/check_connect.js'
checkOverload()

// init routes
app.get('/', (_req, res, _next) => {
  return res.status(200).json({ message: 'welcome to homepage' })
})

// handle error
export default app
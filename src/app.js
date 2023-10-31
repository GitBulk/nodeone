// const express = require('express')
// const app = express()
// module.exports = app

// es6
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
const app = express()
// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init db

// init routes
app.get('/', (req, res, next) => {
  return res.status(200).json({ message: 'welcome to homepage' })
})

// handle error
export default app
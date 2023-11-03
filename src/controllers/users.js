import { validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js'
import { EventEmitter } from 'node:events'
import HttpStatusCode from '../helpers/http-status-code.js'

const userEvent = new EventEmitter()
userEvent.on('event.user.register', (params) => {
  console.log(`param event ${JSON.stringify(params)}`)
})

const getUsers = async (req, res) => {
  res.send('GET users')
}

async function getUser(req, res) {
  res.send('GET user')
}

const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() })
  }

  const { email, password } = req.body
  await userRepository.login(email, password)
  res.status(HttpStatusCode.OK).json({ message: 'login successfully' })
}

const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() })
  }

  const { name, email, password, phone, address } = req.body
  await userRepository.register({ name, email, password, phone, address })
  userEvent.emit('event.user.register', { name, email })
  res.status(HttpStatusCode.OK).json({ message: 'register successfully' })
}

export default {
  getUsers,
  getUser,
  login,
  register
}

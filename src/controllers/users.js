import { validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js'
import { EventEmitter } from 'node:events'
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
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body
  await userRepository.login(email, password)
  res.status(200).json({ message: 'login successfully' })
}

const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, email, password, phone, address } = req.body
  await userRepository.register({ name, email, password, phone, address })
  userEvent.emit('event.user.register', { name, email })
  res.status(200).json({ message: 'register successfully' })
}

export default {
  getUsers,
  getUser,
  login,
  register
}

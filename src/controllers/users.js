import { validationResult } from 'express-validator'

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
  res.status(200).json({ message: 'login successfully' })
}

const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { email, password } = req.body
  res.status(200).json({ message: 'register successfully' })
}

export default {
  getUsers,
  getUser,
  login,
  register
}

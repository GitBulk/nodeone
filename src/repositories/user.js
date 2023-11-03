import { User } from '../models/index.js'
import StandardError from '../exceptions/standard-error.js'
import bcrypt from 'bcrypt'

const login = async (email, password) => {
  // const isMatched = await bcrypt.compare(password, user.password)
  const user = await User.findOne({email}).exec()
  if (!user) {
    throw new StandardError('failed to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new StandardError('failed to login')
  }

  return user
}

const register = async ({ name, email, password, phone, address, gender }) => {
  try {
    let user = await User.findOne({email}).exec()
    if (!!user) {
      throw new StandardError('existing user')
    }

    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
    console.log(`salt: ${salt}`)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone_number: phone,
      address,
      gender
    })
    return newUser
  } catch (error) {
    throw new StandardError(error.message)
  }
}

export default {
  login,
  register
}

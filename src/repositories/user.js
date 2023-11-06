import { User } from '../models/index.js'
import StandardError from '../exceptions/standard-error.js'
import bcrypt from 'bcrypt'
import { Types } from 'mongoose'
import { faker } from '@faker-js/faker'

const getUsers = async () => {
  let data = []
  for (let i = 0; i < 10; i++) {
    data.push({
      id: new Types.ObjectId(),
      name: faker.person.fullName(),
      email: faker.internet.email,
      languages: [
        faker.helpers.arrayElement(['vi', 'us']),
        faker.helpers.arrayElement(['fr', 'de'])
      ],
      gender: faker.helpers.arrayElement(['male', 'female']),
      phone_number: faker.phone.number(),
      address: faker.location.streetAddress(),
      created_at: faker.date.past().toISOString()
    })
  }

  return data
}

const get = async (id) => {
  const user = await User.findById(id).exec()
  if (!user) {
    throw new StandardError(`Not found user ${id}`)
  }

  return user
}

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
  getUsers,
  get,
  login,
  register
}

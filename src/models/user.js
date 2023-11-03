import { ObjectId } from 'bson'
import mongoose, { Schema } from 'mongoose'
import isEmail from 'validator/lib/isEmail'

const User = mongoose.model('users',
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3
      }
    },
    email: {
      type: String,
      validate: {
        validator: (value) => isEmail,
        message: 'Email is invalid'
      }
    },
    languages: {
      type: [String],
      required: false
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        messages: '{VALUE} is not supported'
      },
      required: true
    },
    phone_number: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 5,
        message:  'Phone number must be at least 5 characters'
      },
      required: false
    },
    address: {
      type: String,
      required: false
    }
  })
)

export default User

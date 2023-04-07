import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: String, password: String) => {
  return crypto.createHmac('sha246', [salt, password].join('/')).update(process.env.AUTHENTICATION_SECRET_KEY).digest()
}
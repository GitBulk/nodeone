import jwt from 'jsonwebtoken'
import HttpStatusCode from './http-status-code.js'

export default function verifyJwtToken(req, res, next) {
  const url = req.url.toLowerCase().trim()
  if (['/users/login', '/users/register', '/users/test_data'].includes(url)) {
    next()
    return
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1]
    const jwtObject = jwt.verify(token, process.env.JWT_SECRET)
    req.user = jwtObject.data
    next()
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Invalid or expired token' })
  }
}

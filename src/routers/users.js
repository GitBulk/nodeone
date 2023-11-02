import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()
router.get('/', (req, res) => {
  res.send('GET users')
})
router.get('/:id', (req, res) => {
  res.send(`GET details user ${req.params.id}`)
})
router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    res.send('POST get users')
})
router.post('/register', (req, res) => {
  res.send('POST register users')
})

export default router

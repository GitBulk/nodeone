import express from 'express'
import { body } from 'express-validator'
import { usersController } from '../controllers/index.js'

const router = express.Router()

router.get('/test_data', usersController.testData)
router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUser)
router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  usersController.login
)
router.post('/register', usersController.register)
export default router

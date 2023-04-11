import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'get all' })
})

router.get('/:id', (req, res) => {
  console.log('params', req.params)
  res.json({ message: 'get one' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'delete one' })
})

router.post('/', (req, res) => {
  res.json({ message: 'create one' })
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'update one' })
})

export default router
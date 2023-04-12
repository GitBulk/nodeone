import express from 'express'
import Workout from '../models/workout.js'

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

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'update one' })
})

export default router
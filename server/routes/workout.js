import express from 'express'
import { getWorkout, getWorkouts, createWorkout, destroyWorkout, updateWorkout } from '../controllers/workoutsController.js'
const router = express.Router()

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.delete('/:id', destroyWorkout)
router.post('/', createWorkout)
router.patch('/:id', updateWorkout)

export default router
import Workout from "../models/workout.js"
import mongoose from 'mongoose'

async function getWorkouts(req, res) {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })

  res.status(200).json(workouts)
}

async function getWorkout(req, res) {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'id is invalid' })
  }

  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' })
  }

  res.status(200).json(workout)
}

async function createWorkout(req, res) {
  const { title, load, reps } = req.body

  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function destroyWorkout(req, res) {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'id is invalid' })
  }

  await Workout.findByIdAndDelete(id)
  res.status(200).json({ message: 'delete ok' })
}

async function updateWorkout(req, res) {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'id is invalid' })
  }

  const { title, load, reps } = req.body
  // findByIdAndUpdate will return old values of document
  // we set {new: true} to make it to return new values of document
  const workout = await Workout.findByIdAndUpdate(id, { title, load, reps }, { new: true })
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' })
  }
  res.status(200).json(workout)
}

export {
  getWorkouts,
  getWorkout,
  createWorkout,
  destroyWorkout,
  updateWorkout
}
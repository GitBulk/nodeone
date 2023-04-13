import axios from 'axios'
import { useState } from 'react'

export default function WorkoutForm() {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState('')

  async function handleCreateWorkout(e) {
    e.preventDefault()

    try {
      const response = await axios.post('/api/workouts', { title, load, reps })
      console.log(response.data)
      setTitle('')
      setLoad('')
      setReps('')
    } catch (error) {
      // setError(error.response.data.error)
      setError(error.message)
    }
  }

  return (
    <div>
      <h4>Add new workout</h4>
      <form>
        <div>
          <label>Title:</label>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Load (kg):</label>
          <input type='number' value={load} onChange={(e) => setLoad(e.target.value)} />
        </div>
        <div>
          <label>Reps:</label>
          <input type='number' value={reps} onChange={(e) => setReps(e.target.value)} />
        </div>
        <button onClick={handleCreateWorkout}>Add Workout</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}
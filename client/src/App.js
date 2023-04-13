import './App.css'
import WorkoutDetails from 'components/WorkoutDetails'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WorkoutForm from 'components/WorkoutForm'

function App() {
  const [workouts, setWorkouts] = useState(null)

  async function fetchWorkouts() {
    try {
      const response = await axios.get('/api/workouts')
      const data = response.data
      console.log('data', data)
      setWorkouts(data)
    } catch (error) {
      console.log(error)
      setWorkouts(null)
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <div className='home'>
      <ul className='workouts'>
        {workouts && workouts.map(workout =>
          <WorkoutDetails key={workout._id} workout={workout} />
        )}
      </ul>
      <WorkoutForm />
    </div>
  )
}

export default App

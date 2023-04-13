export default function WorkoutDetails({ workout }) {
  return (
    <li className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </li>
  )
}

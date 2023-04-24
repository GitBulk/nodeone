import { useState } from 'react'

// useState to update object
export default function Sample1() {
  const [person, setPerson] = useState({ name: 'kaka', age: 20 })

  function handleOnClick() {
    const clonedPerson = { ...person }
    clonedPerson.age += 1
    setPerson(clonedPerson)
  }

  return (
    <div className='center-container'>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleOnClick}>Update Age</button>
    </div>
  )
}
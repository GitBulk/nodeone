import { useState } from "react"

export default function FullName() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  return (
    <div className='full-name-container'>
      <h3>Contact Form</h3>
      <div className='full-name-form'>
        <div>
          <label for='fname'>First Name</label>
          <input type='text' name='first_name' placeholder='Your first name..' onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label for='lname'>Last Name</label>
          <input type='text' name='last_name' placeholder='Your last name..' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button onClick={() => setFullName(`${firstName} ${lastName}`) }>Show full name</button>
        <div name='full_name'>{fullName}</div>
      </div>
    </div>
  )
}
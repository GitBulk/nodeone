import { useMemo, useState, useTransition } from 'react'
import { users } from 'mocks/users'

export default function Sample2() {
  const [input, setInput] = useState('')
  const keys = ['first_name', 'last_name', 'email']

  function search(users) {
    const query = input.toLowerCase()
    return users.filter((user) => keys.some((key) => user[key].toLowerCase().includes(query)))
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      padding: '10px'
    }}>
      <div>
        <div className='ui input'>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter student name' />
        </div>
      </div>
      {/* {isPending ? 'Searching ...' : <StudentList data={list} queryStudentName={input} />} */}
      <StudentList data={search(users)} />
    </div>
  )
}

function StudentList({ data }) {
  console.log('sample data', data[0])
  return (
    <table className='ui celled table' style={{ width: '600px' }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

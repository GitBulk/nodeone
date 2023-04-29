import { useEffect, useState, useTransition } from 'react'
import { users } from 'mocks/users'

export default function Sample2() {
  const [input, setInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    console.log('run use effect')
    if (input.length === 0 || input.length >= 2) {
      console.log('filtering data')
      const query = input.toLowerCase()
      const keys = ['first_name', 'last_name', 'email']
      startTransition(() => {
        const filteredUsers = users.filter((user) => keys.some((key) => user[key].toLowerCase().includes(query)))
        setSearchResult(filteredUsers)
      })
    }
  }, [input])

  console.log('is pending', isPending)
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
      {/* {isPending && 'Searching ...'}
      {searchResult.length > 0 ? <StudentList data={searchResult} /> : null} */}
      {isPending ? 'Searching ...' : <StudentList data={searchResult} /> }
    </div>
  )
}

function StudentList({ data }) {
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

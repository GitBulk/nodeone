import { useMemo, useState, useTransition } from 'react'
import db from 'mocks/student_name.json'

export default function Sample1() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()
  const studentNames = useMemo(() => {
    console.log('memo students')
    return db
  }, [])

  function handleOnChange(e) {
    const lowerInput = e.target.value.toLowerCase()
    setInput(lowerInput)
    if (lowerInput.length <= 1) {
      setList([])
      return
    }
    startTransition(() => {
      const filteredNames = studentNames.filter(name => name.toLowerCase().includes(lowerInput))
      setList(filteredNames)
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      padding: '10px',
      width: '500px'
    }}>
      <div>
        <div className='ui input'>
          <input type='text' value={input} onChange={handleOnChange} placeholder='Enter student name' />
        </div>
      </div>
      {isPending ? 'Searching ...' : <StudentList data={list} queryStudentName={input} />}
    </div>
  )
}

function StudentList({ data, queryStudentName }) {
  return (
    <ol className='ui list'>
      {data.map((value, index) => <StudentItem key={index} studentName={value} highlight={queryStudentName} />)}
    </ol>
  )
}

function StudentItem({ studentName, highlight }) {
  const index = studentName.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{studentName}</div>;
  }
  return (
    <li>
      <div>
        <span>{studentName.slice(0, index)}</span>
        <span style={{ backgroundColor: 'yellowgreen' }}>
          {studentName.slice(index, index + highlight.length)}
        </span>
        <span>{studentName.slice(index + highlight.length)}</span>
      </div>
    </li>
  )
}

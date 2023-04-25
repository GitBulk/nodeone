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
    <div className='center-container'>
      <div>Student name <input type='text' value={input} onChange={handleOnChange} /></div>
      {isPending ? 'Searching ...' : <StudentList data={list} queryStudentName={input} />}
    </div>
  )
}

function StudentList({ data, queryStudentName }) {
  return (
    <div>
      {data.map((value, index) => <StudentItem key={index} studentName={value} highlight={queryStudentName} />)}
    </div>
  )
}

function StudentItem({ studentName, highlight }) {
  const index = studentName.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{studentName}</div>;
  }
  return (
    <div>
      {studentName.slice(0, index)}
      <span style={{ backgroundColor: 'yellowgreen' }}>
        {studentName.slice(index, index + highlight.length)}
      </span>
      {studentName.slice(index + highlight.length)}
    </div>
  )
}

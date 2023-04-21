import { useEffect, useState } from 'react'

export default function ChildComponent() {
  const [userId] = useState(3)
  const [data, setData] = useState()
  useEffect(() => {
    console.log('useEffect run')
    fetch(`https://reqres.in/api/users/${userId}`)
      .then(res => res.json())
      .then(res => setData(res.data))
  }, [userId])

  return (
    <div>{data}</div>
  )
}
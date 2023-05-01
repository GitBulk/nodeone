import { useEffect, useRef, useState } from 'react'

export default function Sample1() {
  const [name, setName] = useState('kaka')
  const previousName = useRef(null)

  useEffect(() => {
    console.log('running use effect')
    console.log('name', name)
    previousName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>{previousName.current} -> {name}</div>
    </>
  )
}

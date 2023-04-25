import { useState } from 'react'

export default function Sample2() {
  const [count, setCount] = useState(() => {
    return heavyTask()
  })

  function heavyTask() {
    console.log('Do heavyTask')
    let total = 0
    for (let i = 0; i <= 100; i++) {
      total += i
    }
    return total
  }

  function handleOnClick() {
    setCount(count + 1)
  }


  return (
    <div className='center-container'>
      <div>{count}</div>
      <button onClick={handleOnClick}>Increase</button>
    </div>
  )
}

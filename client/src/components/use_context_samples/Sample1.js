import { createContext, useContext, useState } from 'react'

export const MyContext = createContext()

export default function Sample1() {
  const [value, setValue] = useState('Default value')

  return (
    <MyContext.Provider value={{ value, setValue }}>
      <Child1Component />
      <Child2Component />
    </MyContext.Provider>
  )
}

function Child1Component() {
  const { value, setValue } = useContext(MyContext)

  return (
    <div>
      <p>the value is: {value}</p>
      <button onClick={() => setValue(`New value, changed at ${new Date().toLocaleTimeString()}`)}>Change value</button>
    </div>
  )
}

function Child2Component() {
  const { value } = useContext(MyContext)

  return (
    <div>This is child 2 component, value is #{value}</div>
  )
}
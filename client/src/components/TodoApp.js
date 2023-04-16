import { useState } from 'react'

export default function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleAddTodo() {
    const trimInputValue = inputValue.trim()
    if (trimInputValue !== '') {
      console.log('handleAddTodo')
      setTodos([...todos, trimInputValue])
      setInputValue('')
    }
  }

  function handleDeleteTodo(deletedIndex) {
    console.log('handleDeleteTodo')
    setTodos(todos.filter((_, index) => index !== deletedIndex))
  }

  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <table>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td>{todo}</td>
            <td><button onClick={() => handleDeleteTodo(index)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  )
}
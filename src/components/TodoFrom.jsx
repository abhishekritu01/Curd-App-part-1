import React, { useContext } from 'react'
import '../App.css'
import TodoContext from '../context/TodoProvider'


const TodoFrom = () => {
  const { todo, setTodo, todos, editId, handleSubmit } = useContext(TodoContext)

  return (
    <div className='App'>
      <div>
        <h3>total todos :  {todos.length}</h3>
        <h3>total no. of words :  {todo.length}</h3>

      </div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>
    </div>
  )
}

export default TodoFrom
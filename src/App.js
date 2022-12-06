import React from 'react'
import './App.css'
import TodoState from './context/TodoState'
import TodoFrom from './components/TodoFrom'
import TodoList from './components/TodoList'



const App = () => {
  return (
    <div className='App'>
      <h3>Todo-App</h3>
      <TodoState>
        <TodoFrom />
        <TodoList />
      </TodoState>
    </div>
  )
}

export default App
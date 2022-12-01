import React from 'react'
import TodoFrom from './components/TodoFrom'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoProvider'

const App = () => {
  return (
    <TodoProvider>
      <TodoFrom />
      <TodoList />
    </TodoProvider>
  )
}

export default App
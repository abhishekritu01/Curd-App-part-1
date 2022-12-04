import '../App.css'
import React from 'react'

const TodoItem = ({ text, clickToToggle, clickToDelete, complete,clickToEdit}) => {
  
  

  return (
    <div>
      <span style={{ textDecoration: complete ? "line-through" : "", color: complete ? "green" : "red" }}>{text} </span>
      <div>
        <button onClick={clickToDelete}>delete</button>
        <button onClick={clickToToggle}>completed</button>
        <button onClick={clickToEdit} >Edit</button>
        
      </div>
    </div>
  )
}

export default TodoItem

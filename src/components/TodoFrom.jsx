import React,{useContext} from 'react'
import '../App.css'
import TodoContext from '../context/TodoProvider'


const TodoFrom = () => {
    const {todo,setTodo,setTodos,todos,editId,setEditId} =useContext(TodoContext)

    const handleSubmit = (e) => {
      e.preventDefault();
      if (editId) {
        const editTodo = todos.find((t) => t.id === editId);
        const updatedTodos = todos.map((t) =>
          t.id === editTodo.id
            ? (t = { id: t.id, todo })
            : { id: t.id, todo: t.todo }
        );
        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        return;
      }
      if (todo !== "") {
        setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
        setTodo("");
      }
    };
    
  return (
    <div className='App'>
     <div>
      <h3>total todos :  {todos.length}</h3>
      <h3>total no. of words :  {todo.length}</h3>
      
     </div>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>
    </div>
  )
}

export default TodoFrom
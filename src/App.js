import "./App.css";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("Enter ");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  

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

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id);
    setTodos(deleteTodo);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
 
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  
  return (
    <div className="App">
      <h1>todo-app</h1>

      <div>
        <input  value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>
      </div>

      <div className={todo.completed ? "complete" : ""}>
        {todos.map((t) => (
          <div className="container" key={t.id}>
            <ul style={{ textDecoration: t.completed ? "line-through" : "" }}>{t.todo}</ul>
            <button onClick={() => handleDelete(t.id)}>delete</button>
            <button onClick={() => handleEdit(t.id)}>update</button>
            <button  onClick={() => completeTodo(t.id)}>completed</button>
          </div>
        ))}
      </div>
    </div>
  );
}



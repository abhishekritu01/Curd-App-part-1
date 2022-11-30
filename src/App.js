import "./App.css";
import { useState} from "react";
import TodoFrom from "./components/TodoFrom";
import TodoList from "./components/TodoList"

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
        <TodoFrom
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
      />
  

      <TodoList 
      todos={todos} 
      handleEdit={handleEdit} 
      handleDelete={handleDelete} 
      completeTodo={completeTodo}
      todo={todo}

      
      />
    </div>
  );
}



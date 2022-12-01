
import { createContext, useState } from "react";

const TodoContext = createContext();
export function TodoProvider({ children }) {
    const [todo, setTodo] = useState("a")
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(0)

    const todoList=()=>todos.length

    return (
        <TodoContext.Provider value={{
            todoList,
            todo,
            todos,
            setTodo,
            setTodos,
            editId,
            setEditId
        }}> {children}</TodoContext.Provider >
    )
}

export default TodoContext;


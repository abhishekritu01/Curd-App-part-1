import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoProvider'
import '../App.css'

const TodoList = () => {
    const { todo,setTodo,setTodos,todos,setEditId} = useContext(TodoContext)


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
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div className='App'>
            <div className={todo.completed ? "complete" : ""}>

                {todos.map((t) => (
                    <div className="container" key={t.id}>
                        <ul style={{ textDecoration: t.completed ? "line-through" : "" }}>{t.todo}</ul>
                        <button onClick={() => handleDelete(t.id)}>delete</button>
                        <button onClick={() => handleEdit(t.id)}>update</button>
                        <button onClick={() => completeTodo(t.id)}>completed</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList
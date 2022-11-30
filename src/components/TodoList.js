import React from 'react'
// import '../App.css'

const TodoList = ({ todo, todos, handleDelete, handleEdit, completeTodo }) => {
    return (
        <div>
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
import React from 'react'

const TodoFrom = ({ todo, setTodo, editId, handleSubmit }) => {
    return (
        <div>
            <div>
                <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
                <button onClick={handleSubmit}>{editId ? "Edit" : "Go"}</button>
            </div>
        </div>
    )
}

export default TodoFrom
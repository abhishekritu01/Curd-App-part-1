import React, { useContext} from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../context/todo-context'


const TodoList = () => {
   
    const { todos, toggleTodo, deleteTodo,setTodo} = useContext(TodoContext);

    return (
        <div>
            
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        complete={todo.complete}
                        clickToToggle={() => toggleTodo(todo.id)}
                        clickToDelete={() => deleteTodo(todo.id)}
                        clickToEdit={() => setTodo(todo)}
                        
                    />
                ))
            }
        </div>
    )
}

export default TodoList
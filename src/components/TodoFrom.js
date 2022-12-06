// import React, { useContext, useState, useEffect} from 'react'
// import TodoContext from '../context/todo-context'



// const TodoFrom = () => {

//     const [todo, setTodo] = useState('')
//     const { addTodo, todos, currentTodo, updateTodo } = useContext(TodoContext);

//     useEffect(() => {
//         if (currentTodo != null) {
//             console.log(currentTodo.text);
//             setTodo(currentTodo.text);
//         }
//     }, [currentTodo])

//     const onChangeHandler = (e) => {
//         setTodo(e.target.value)
//     }

//     const onSubmitHandler = (e) => {
//         e.preventDefault()
//         //{id:123 text:'akbk' complete: false}
//         if (currentTodo) {
//             const updated_todo = {
//                 id: currentTodo.id,
//                 text: todo,
//                 completed: currentTodo.completed,

//             }
//             updateTodo(updated_todo)
//             setTodo("");
//             updateTodo(todo)
//             return;
//         } else {
//             const newTodo = {
//                 id: Math.random(),
//                 text: todo,
//                 complete: false
//             }
//             if (todo !== "") {
//                 addTodo(newTodo)
//                 console.log(newTodo)
//                 setTodo('')
//             }
//         }
//     }




//     return (
//         <div>
//             <h4>Total Todos :{todos.length}</h4>
//             <form onSubmit={onSubmitHandler}>
//                 <input type='text'
//                     value={todo}
//                     placeholder="Enter todo"
//                     onChange={onChangeHandler}
//                 />
//             </form>
//         </div>
//     )
// }

// export default TodoFrom


import React, { useContext, useState, useEffect } from 'react'
import TodoContext from '../context/todo-context'



const TodoFrom = () => {

    const [todo, setTodo] = useState('')
    const { addTodo, todos, currentTodo, updateTodo } = useContext(TodoContext);

    useEffect(() => {
        if (currentTodo) {
            setTodo(currentTodo.text);
        }
    }, [currentTodo])

    const onChangeHandler = (e) => {
        setTodo(e.target.value)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        //{id:123 text:'akbk' complete: false}
        if (currentTodo) {
            const updated_todo = { id: currentTodo.id, text: todo, completed: true, }
            updateTodo(updated_todo)
            setTodo('')
        }
        else {
            const newTodo = { id: Math.random(), text: todo, complete: false, }
            if (todo !== "") {
                addTodo(newTodo)
                console.log(newTodo)
            }
        }
        setTodo('')
        return;
    }

    ////////////////





    return (
        <div>
            <h4>Total Todos :{todos.length}</h4>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <input type='text'
                    value={todo}
                    placeholder="Enter todo"
                    onChange={onChangeHandler}
                />

            </form>
        </div>
    )
}

export default TodoFrom



import React, { useReducer } from 'react'
import TodoContext from './todo-context'
import todoReducer from './todo-reducer'


import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_TODO ,UPDATE_TODO} from './todo-action'

const TodoState = (props) => {
    const intialState = {
        todos: [], // {id: '123', text: 'Some text', complete: false}
        currentTodo:null,
        
    };

    const [state, dispatch] = useReducer(todoReducer, intialState);


    //Edit Todo
    const setTodo = (todo) => {
        dispatch({
            type: SET_TODO,
            payload: todo,
        })
    }

    // Add todo
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo,
        });
    };

    // Toggle a todo
    const toggleTodo = (todoID) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoID,
        });
    };

    // Delete a todo
    const deleteTodo = (todoID) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoID,
        });
    };
    // Delete a todo
    const updateTodo = (todo) => {
        dispatch({
            type: UPDATE_TODO,
            payload: todo,
        });
    };



    

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                currentTodo: state.currentTodo,
                addTodo,
                toggleTodo,
                deleteTodo,
                setTodo,
                updateTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;

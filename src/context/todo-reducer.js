import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_TODO, UPDATE_TODO } from "./todo-action";

const todoReducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                currentTodo: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, complete: !todo.complete }
                        : todo
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id == action.payload.id ? action.payload : todo),
            }
        default:
            return state;
    }
};

export default todoReducer;

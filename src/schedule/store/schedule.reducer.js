const initialState = {
    todos: []

}

export  default function scheduleReducer(state=initialState,action) {
        switch (action.type) {
            case "ADD_TODO": //string값은 타입인데 상수풀이라서 가져다쓰면댐
                return {...state, todos: [...state.todos, action.payload]}//안에 state가 여러개있는데 state외에도 "..."state나머지-dispatch
            case "TOGGLE_TODO":
                return {...state,todos: state.todos.map(todo => todo.todoid === action.payload ? {...todo,complete: !todo.complete}:todo)}
            case "DELETE_TODO":
                return{
                    ...state,
                    todos: state.todos.filter(todo => todo.todoid !== action.payload)
                }
            default:
                return state //이도저도 없으면 주었던 state 그대로 반납
        }
}
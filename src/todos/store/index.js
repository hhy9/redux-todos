import {createStore} from "redux";
import todos from './todos.reducer'

export const store = createStore(
    todos
)

export default store
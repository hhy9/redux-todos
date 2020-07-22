import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoAction} from "./store/schedule.action";
import uuid from 'uuid/v4'

const ToDoInput = () =>{
    const [todo,setTodo] = useState('')
    const dispatch = useDispatch() //액션만들었고 상태만들었으니까 ..디스패치로..?
    const addToDo = todo =>dispatch(addTodoAction(todo))

    const handleChange = e=> {
        e.preventDefault()
        setTodo(e.target.value)
    }
    const submitForm = e => {
        e.preventDefault()
        const newTodo = {
            todoid: uuid(), //uuid로 토큰값이 발급된거임/api로 가져와야하지만..?
            name: todo,
            complete: false
        }
        addToDo(newTodo) //addToDo 리듀서( newTodo넣으면 state가 newTodo로바뀜)->리듀서의 페이로드로 집어넣으면 바뀔꺼야
        setTodo("")//input박스 지움
    }
    return (
        <>
            <form onSubmit={submitForm} method="POST">
                <div className="row mt-3">
                    <div className="form-group col-sm-8">
                        <input
                            type="text"
                            placeholder="Add a todo"
                            name="todo"
                            className="form-control"
                            value={todo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-sm-4">
                        <button type="submit" className="btn btn-primary btn-md">
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>

            </>
    )
}

export default ToDoInput
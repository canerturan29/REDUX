import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodosFiltered, getTodosAsync, toggleTodoAsync, removeTodoAysnc } from '../redux/todos/todoSlice'
import Error from './Error'
import Loading from './Loading'





export default function TodoList() {

    const dispatch = useDispatch()
    const filteredTodos = useSelector(selectTodosFiltered)
    const isLoading = useSelector((state) => state.todos.isLoading)
    const error = useSelector((state) => state.todos.error)

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])

    const destroyAndConfirm = async (id) => {
        if (window.confirm("Are You sure?")) {
            await dispatch(removeTodoAysnc(id))
        }

    }
    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({ id, data: { completed } }))
    }
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <ul className="todo-list">



            {filteredTodos.map(item => <li key={item.id} className={item.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={item.completed} onChange={() => handleToggle(item.id, !item.completed)} />
                    <label>{item.title}</label>
                    <button className="destroy" onClick={() => destroyAndConfirm(item.id)}></button>
                </div>
            </li>)
            }
        </ul >
    )
}

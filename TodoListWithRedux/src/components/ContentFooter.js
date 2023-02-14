import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter, clearCompleted, selectTodos } from '../redux/todos/todoSlice'

export default function ContentFooter() {
    const items = useSelector(selectTodos)
    const dispatch = useDispatch()
    const itemLeft = items.filter(item => !item.completed).length
    const activeFilter = useSelector(state => state.todos.activeFilter)
    useEffect(() => {
        localStorage.setItem("activeFilter", activeFilter)
    }, [activeFilter])
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemLeft} </strong>
                {itemLeft > 1 ? "items lefts" : "item left"}
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={activeFilter === "all" ? "selected" : ""} onClick={() => dispatch(changeFilter("all"))}>All</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === "active" ? "selected" : ""} onClick={() => dispatch(changeFilter("active"))}>Active</a>
                </li>
                <li>
                    <a href="#/" className={activeFilter === "completed" ? "selected" : ""} onClick={() => dispatch(changeFilter("completed"))} >Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer>
    )
}

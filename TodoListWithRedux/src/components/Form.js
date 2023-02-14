
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTodoAsync } from '../redux/todos/todoSlice'


export default function Form() {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.todos.addNewTodoLoading)
    const error = useSelector(state => state.todos.addNewTodoError)

    const handleSubmit = async (e) => {
        if (title === "") return

        e.preventDefault()

        await dispatch(addTodoAsync({ title }))
        setTitle("")
    }
    if (error) {
        alert(error)
        return
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <input disabled={isLoading} className='new-todo' placeholder="what needs to be done?" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
            {isLoading && <span style={{ paddingRight: 10 }}>Loading...</span>}
        </form>
    )
}

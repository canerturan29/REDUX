import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await fetch("http://localhost:7000/todos")
    return await res.json()
}
)
export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
    const res = await axios.post("http://localhost:7000/todos", data)
    return res.data
})
export const toggleTodoAsync = createAsyncThunk("todos/toggleTodoAsync", async ({ id, data }) => {
    const res = await axios.patch(`http://localhost:7000/todos/${id}`, data)
    return res.data
})
export const removeTodoAysnc = createAsyncThunk("todos/removeTodoAysnc", async (id) => {
    await axios.patch(`http://localhost:7000/todos/${id}`)
    return id
})


export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: localStorage.getItem("activeFilter"),
        addNewTodoLoading: false,
        addNewTodoError: null
    },
    reducers: {

        // toggle: (state, action) => {
        //     const { id } = action.payload
        //     const item = state.items.find(item => item.id === id)
        //     item.completed = !item.completed
        // },
        // destroy: (state, action) => {
        //     const filtered = state.items.filter(item => item.id !== action.payload)
        //     state.items = filtered
        // },
        changeFilter:
            (state, action) => { state.activeFilter = action.payload }, clearCompleted: (state, action) => {
                const filtered = state.items.filter(item => item.completed === false)
                state.items = filtered
            }

    },
    extraReducers: {
        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.addNewTodoLoading = false

        },
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodoLoading = true
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodoError = action.error.message
            state.addNewTodoLoading = false
        }, [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload
            const index = state.items.findIndex(item => item.id === id)
            state.items[index].completed = completed

        },
        [removeTodoAysnc.fulfilled]: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter(item => item.id !== id)
            state.items = filtered
                ;

        }
    }
})
export const selectTodos = (state) => state.todos.items

export const selectTodosFiltered = (state) => {
    if (state.todos.activeFilter === "all") {
        return state.todos.items
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === "active"
            ? todo.completed === false
            : todo.completed === true)
}

export const { changeFilter, clearCompleted } = todoSlice.actions

export default todoSlice.reducer


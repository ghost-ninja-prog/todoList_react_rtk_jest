import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export type TTodoType = {
    title: string,
    id: number,
    completed: boolean,
    userId: string,
}

export type TTodosStateType = {
    todos: TTodoType[],
    loading: boolean,
    error: string | null | undefined,
}


export const URL = 'https://jsonplaceholder.typicode.com/todos/'



export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`${URL}?_limit=20`)
        
        if (!response.ok) {
            return rejectWithValue('Can\'t fetch todo. Server error!!!')
        }
        return response.json()
    }
)

export const deleteTodo = createAsyncThunk<number, number, {rejectValue: string}>(
    'todos/removeTodo',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`${URL}${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t dalete todo. Server error!!!')
        }
        return id
    }
)





const initialState: TTodosStateType = {
    todos: [],
    loading: false,
    error: null,
}

const asyncTodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        clearErrorMessage: (state) => {
            state.error = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.loading = false
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { clearErrorMessage } = asyncTodoSlice.actions

export const asyncTodoReducer = asyncTodoSlice.reducer



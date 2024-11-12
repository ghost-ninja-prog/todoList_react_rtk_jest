import { http, HttpResponse } from "msw"
import { TTodoType } from "../store/slices/todosSlice"

export const mockTodos: TTodoType[] = [
    {
        id: 1,
        title: 'some content',
        completed: false,
        userId: '1' 
    },
    {
        id: 2,
        title: 'some two content',
        completed: true,
        userId: '1' 
    }
]

export const restHandlers = [
    http.get(`${URL}_limit=20`, () => {
        return HttpResponse.json(mockTodos)
    })
]
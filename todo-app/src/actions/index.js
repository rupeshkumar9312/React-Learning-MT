const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETED_TODO = 'COMPLETED_TODO'
export const actionAddTodo = (name,description,status) => ({
    type: ADD_TODO,
    name,
    description,
    status,
    id: Math.random()
})

export const actionDeleteToDo = (id)  =>({
    type: DELETE_TODO,
    id
})

export const actionCompletedToDo = () => ({
    type: COMPLETED_TODO
})
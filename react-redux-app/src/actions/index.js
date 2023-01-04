const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO'

export const addToDoCreater = (text) => ({
    type: ADD_TODO,
    text,
    id: Math.random()
})


export const deleteToDoCreater = (id) => ({
    type: DELETE_TODO,
    id
})
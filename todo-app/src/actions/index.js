const ADD_TODO = 'ADD_TODO';

export const actionAddTodo = (name,description,status) => ({
    type: ADD_TODO,
    name,
    description,
    status,
    id: Math.random()
})
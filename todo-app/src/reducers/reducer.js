
const initialState = {
    data: [],
    deletedTodo: []
}

const todos = (state = initialState, action) => {
    const lists = state.data;
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[...state.data,{name : action.name,description: action.description, status:action.status, id: action.id}]
            };
        case 'DELETE_TODO':
            const newList = lists.filter((list) => list.id !== action.id)
            const deletedTodo = lists.filter((list)=>list.id === action.id);
            return {
                ...state,
                data:newList,
                deletedTodo : deletedTodo
            }
        case 'COMPLETED_TODO':
            const completedTodoList = lists.filter((list) => list.status === 'Completed')
            
            return{
                ...state,
                data: completedTodoList
            }
        default :
            return state;
    }

}

export default todos;
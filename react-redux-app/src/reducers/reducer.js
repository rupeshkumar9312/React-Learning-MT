
const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[...state.data,{text : action.text, id: action.id}]
            };
        case 'DELETE_TODO':
            const lists = state.data;
            const newList = lists.filter((list) => list.id !== action.id)
            return {
                ...state,
                data:newList
            }
        default :
            return state;
    }
}

export default todos;
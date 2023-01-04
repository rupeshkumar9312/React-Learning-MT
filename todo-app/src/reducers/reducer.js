
const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[...state.data,{name : action.name,description: action.description, status:action.status, id: action.id}]
            };
        default :
            return state;
    }

}

export default todos;
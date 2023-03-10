import React from 'react'
import { connect } from 'react-redux'
import ToDoCard from './ToDoCard';
function ToDos(props) {
    const lists = props.todos.todos.data;
    return (
        <div>
            {lists.map((list,index) => (
                <ToDoCard name={list.name} id={list.id} status={list.status}></ToDoCard>
            ))}
        </div>
    )
}

const getPropsFromState = (state) => ({
    todos: state
})
export default connect(getPropsFromState)(ToDos)
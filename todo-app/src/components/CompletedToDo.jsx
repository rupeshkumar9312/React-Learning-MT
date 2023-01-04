import React from 'react'
import ToDoCard from './ToDoCard';
import {connect} from 'react-redux';

function CompletedToDo(props) {
    const lists = props.todos.todos.data;
    const completedToDoList = lists.filter((list) => list.status === 'Completed')   
    return (
        <div>
            {completedToDoList.map((list, index) => (
                <ToDoCard name={list.name} id={list.id}  status={list.status}></ToDoCard>
            ))}
        </div>
    )
}

const getPropsFromState = (state) => ({
    todos: state
})
export default connect(getPropsFromState)(CompletedToDo)
import React from 'react'
import { connect } from 'react-redux'
import { deleteToDoCreater } from '../actions';

function ListTodo(props) {
    console.log(props)
    const lists = props.todos.todos.data;
  return (
    <div>
        <h1>List Todo</h1>
        <ul>
            {lists.map((list,index) => (
                <li key={index}>{list.text}
                <button onClick={event=>{
                        props.dispatch(deleteToDoCreater(list.id))
                }}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

const getPropsFromState = (state) => ({
    todos: state
})

export default connect(getPropsFromState)(ListTodo) //connect to store.js
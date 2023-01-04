import React from 'react'
import { actionDeleteToDo } from '../actions'
import './TodoCard.css'
import {connect} from 'react-redux'

function ToDoCard(props) {
    
  return (
    <div className='todo-card'>
        <p>{props.name}</p>
        <b>{props.status}</b>
        <button onClick={event=>{
                        props.dispatch(actionDeleteToDo(props.id))
                }}>Delete</button>
    </div>
  )
}
const getPropsFromState = (state) => ({
    todos: state
})

export default  connect(getPropsFromState)(ToDoCard)
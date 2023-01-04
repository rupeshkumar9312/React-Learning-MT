import React from 'react'
import './TodoCard.css'

function ToDoCard(props) {
  return (
    <div className='todo-card'>
        <p>{props.name}</p>
        <button>Delete</button>
    </div>
  )
}

export default ToDoCard
import React from 'react'
import AddTodo from './AddTodo'
import CompletedToDo from './CompletedToDo'
import Container from './Container'
import './MainContainer.css'
import PendingToDo from './PendingToDo'
import ToDos from './ToDos'
function MainContainer(props) {
    
    
  return (
    <div className='main-container'>
        <Container name="Add Todo"><AddTodo></AddTodo></Container>
        <Container name="Todo's List"><ToDos></ToDos></Container>
        <Container name="Deleted Todo's"></Container>
        <Container name="Completed Todo's"><CompletedToDo></CompletedToDo></Container>
        <Container name="Pending Todo's"><PendingToDo></PendingToDo></Container>
    </div>
  )
}

export default MainContainer
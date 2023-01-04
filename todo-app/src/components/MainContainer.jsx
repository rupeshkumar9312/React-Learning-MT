import React from 'react'
import AddTodo from './AddTodo'
import Container from './Container'
import './MainContainer.css'
import ToDos from './ToDos'
function MainContainer(props) {
    console.log(props)
  return (
    <div className='main-container'>
        <Container name="Add Todo"><AddTodo></AddTodo></Container>
        <Container name="Todo's List"><ToDos></ToDos></Container>
        <Container name="Deleted Todo's"></Container>
        <Container name="Completed Todo's"></Container>
        <Container name="Pending Todo's"></Container>
    </div>
  )
}

export default MainContainer
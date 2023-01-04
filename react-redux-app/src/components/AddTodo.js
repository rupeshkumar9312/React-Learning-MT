import React from 'react'
import { connect } from 'react-redux';
import { addToDoCreater } from '../actions';

function AddTodo(props) {
    console.log(props)
  return (
    <div>
        <h2>AddTodo</h2>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.userInput.value);
            props.dispatch(addToDoCreater(event.target.userInput.value))
        }}>
            <input type = "text" name = "userInput"></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default connect()(AddTodo)
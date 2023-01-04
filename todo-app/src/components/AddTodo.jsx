import React from 'react'
import './AddTodo.css'
import { connect } from 'react-redux'
import { actionAddTodo } from '../actions'

function AddTodo(props) {
    return (
        <div>

            <form onSubmit={event => {
                event.preventDefault();
                console.log("Button Clicked")
                console.log(event.target.name.value)
                props.dispatch(actionAddTodo(event.target.name.value, event.target.description.value, event.target.status.value));
            }} className='add-todo-form'>
                <input type="text" name='name' placeholder='name' /><br />
                <input type="text" name="description" placeholder='description' /><br />
                <div>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="">
                        <option value="Completed">Completed</option>
                        <option value="Pending" defaultChecked>Pending</option>
                    </select>
                </div><br/>

                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
import React from 'react'
import { useState } from 'react';
import './AddUser.css'
import Button from './UI/Button';
import Card from './UI/Card'
import ErrorModal from './UI/ErrorModal';


function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    let users = props.users
    const onsubmitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (enteredAge < 1) {
            setError(
                {
                    title: "Invalid Age",
                    message: "Please enter valid age ( > 0 )"
                }
            )
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);

    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const modelHandler = () => {
        setError();
    }

    return (

        <div >
            {error && <ErrorModal onClick={modelHandler} title={error.title} message={error.message}></ErrorModal>}

            <form className='add-user' onSubmit={onsubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={enteredUsername} onChange={usernameHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" onChange={ageHandler} name="age" id="age" value={enteredAge} />
                <Button type='submit'>Add User</Button>
            </form>

        </div>


    )
}

export default AddUser
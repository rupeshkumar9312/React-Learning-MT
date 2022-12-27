import React from 'react'
import { useState } from 'react'
import './Registration.css'

function Registration() {

    const [usersList,setUsersList] = useState([])
    var name;
    var age;
    const saveUser = (event) => {
        event.preventDefault();
        console.log(name)
        console.log(age)
        setUsersList(name)
        console.log(usersList)
        
    }
    const getName = (event) => {
        name = event.target.value;
    }

    const getAge = (event) => {
        age = event.target.value;
    }
    return (
        <div>
            <form>
                <div className='container-form'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Name' onBlur={getName} />
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Age' onBlur={getAge} />
                    <button onClick={saveUser}>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Registration
import React from 'react'
import './Registration.css'

function Registration() {
    return (
        <div>
            <form action="">
                <div className='container-form'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Name' />
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Age' />
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Registration
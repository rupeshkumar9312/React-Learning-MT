import React from 'react'
import { useState } from 'react'
import AddUser from '../AddUser'
import UsersList from '../UsersList'
import './Card.css'
import ErrorModal from './ErrorModal'

function Card(props) {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (username, uAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, { name: username, age: uAge, id: Math.random().toString() }]
        })
        console.log(usersList)
    }

    return (
        <div>
 <div className='card'>
                <AddUser onAddUser={addUserHandler}></AddUser>
            </div>
            <div className='card'>
                <UsersList users={usersList} ></UsersList>
            </div>

        </div>
    )
}

export default Card
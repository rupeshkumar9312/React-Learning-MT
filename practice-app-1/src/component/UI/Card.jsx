import React from 'react'
import { useState } from 'react'
import AddUser from '../AddUser'
import Wrapper from '../Helpers/Wrapper'
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
        <Wrapper>
            <div className='card'>
                <AddUser onAddUser={addUserHandler}></AddUser>
            </div>
            <div className='card'>
                <UsersList users={usersList} ></UsersList>
            </div>

        </Wrapper>
    )
}

export default Card
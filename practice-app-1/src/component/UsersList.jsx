import React from 'react'
import './UsersList.css'

function UsersList(props) {
    const users = [
        {
            "name": "Rupesh"
        },
        {
            "name": "Abhishek"
        }
    ]
    return (
        <div className='users-list'>
            {props.users.map((user) => {
                return <li key={user.id}>{user.name} ({user.age} years old)</li>
            })}
            {/* <li></li> */}
        </div>
    )
}

export default UsersList
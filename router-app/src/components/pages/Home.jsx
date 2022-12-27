import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const goToContactUs = (event) => {
        // console.log(event)
        if(name.toLocaleLowerCase() === 'admin'){
            navigate('admin')
        }else{
            navigate('user')
        }
    }
    const setUsername =(event)=>{
        // const value = event.target.value;
        setName(event.target.value);
        
    }
    return (
        <div>
            <h1>Home</h1>
            <input type="text" placeholder='Enter your name' onBlur={setUsername}/>
            <button onClick={goToContactUs}>Contact US</button>
        </div>
    )
}

export default Home
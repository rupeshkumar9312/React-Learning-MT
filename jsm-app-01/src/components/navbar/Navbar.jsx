import React from 'react'
import {RiMenu,RiCloseLin} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

// BEM -> Block Element Modifier

function Navbar() {
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links-logo'>
                <img src={logo} alt="logo" srcset="" />
            </div>
            <div className='gpt3__navbar-links-container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT</a></p>
                <p><a href="#possibility">OpenAI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#">Library</a></p>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar
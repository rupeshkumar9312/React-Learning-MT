import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='navbar'><img src = {logo} className="logo"></img></div>
  )
}

export default Navbar
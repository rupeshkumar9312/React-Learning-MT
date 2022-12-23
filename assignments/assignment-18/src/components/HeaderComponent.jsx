import React from 'react'
import './HeaderComponent.css'
import Navbar from './Navbar'

function HeaderComponent() {
  return (
    <div className='header-component'>
        <h3 className='logo-text'>Sensive</h3>
        <Navbar></Navbar>
    </div>
  )
}

export default HeaderComponent
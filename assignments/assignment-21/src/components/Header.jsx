import React from 'react'
import './Header.css'
import header from '../images/header.webp';

function Header() {
  return (
    <div className='header'><img src={header} className='image'></img>
    </div>
  )
}

export default Header
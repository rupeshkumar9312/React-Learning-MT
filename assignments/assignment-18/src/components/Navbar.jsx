import React from 'react'
import './Navbar.css'
import NavItem from './NavItem'

function Navbar() {
  return (
    <div className='navbar'>
        <NavItem name = 'Home'></NavItem>
        <NavItem name = 'Archive'></NavItem>
        <NavItem name = 'Category'></NavItem>
        <NavItem name = 'Pages'></NavItem>
        <NavItem name = 'Contact'></NavItem>
    </div>
  )
}

export default Navbar
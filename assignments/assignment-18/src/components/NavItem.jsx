import React from 'react'
import './NavItem.css'

function NavItem(props) {
  return (
    <div className='nav-item'><a href='#'>{props.name}</a></div>
  )
}

export default NavItem
import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className='btn'>
        <button type={props.type} onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button
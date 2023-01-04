import React from 'react'
import './Container.css'

function Container(props) {

  return (
    <div className='container'>
        <h2>{props.name}</h2>
        {props.children}
    </div>
  )
}

export default Container
import React from 'react'
import './EventHeading.css'

function EventHeading(props) {
  return (
    <div className='heading'>{props.name}</div>
  )
}

export default EventHeading
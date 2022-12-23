import React from 'react'
import './Details.css'
import DetailsImage from './DetailsImage'
import EventHeading from './EventHeading'

function Details(props) {
  return (
    <div className='details'>
        <DetailsImage image = {props.image}>{console.log(props.image)}</DetailsImage>
        <EventHeading name = {props.name}></EventHeading>
        <h6 className='tags'>{props.tags}</h6>
        <p className='content'>{props.content}</p>
        <button className='btn'>See More...</button>
    </div>
  )
}

export default Details
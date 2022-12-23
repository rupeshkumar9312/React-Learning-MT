import React from 'react'
import './DetailsImage.css'
import laserShow from '../images/laser-show.jpeg'

function DetailsImage(props) {
  return (
    <div className='details-image'><img src={props.image} className="image-props">{console.log(props.image)}</img></div>
  )
}

export default DetailsImage
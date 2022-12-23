import React from 'react'
import './Destination.css'
import image from '../images/bg.jpeg'
function Destination(props) {
    const class_name = "destination-all destination" + props.class;
    return (
        <div className={class_name}>
            <img src={props.image} class='destination-image' />
            <div className='destination-name'>{props.name}</div>
            <p className='destination-description'>
                {props.description}
            </p>
        </div>
    )
}

export default Destination
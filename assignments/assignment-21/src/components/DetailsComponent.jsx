import React from 'react'
import Details from './Details'
import './DetailsComponent.css'
import liveMusic from '../images/live-music.jpeg'
import laserShow from '../images/laser-show.jpeg'
import dj from '../images/dj.jpeg'
import nightParty from '../images/download.jpeg'

function DetailsComponent() {

    const eventDetails = [
        {
            id:1,
            name:'Live Music',
            image: liveMusic,
            content: 'We are happy to annouce this special show. We are happy to annouce this special show.',
            tags: '#hip-hop #live #music'
        },
        {
            id:1,
            name: 'Laser Show',
            image: laserShow,
            content: 'We are happy to annouce laser show for our audience.We are happy to annouce laser show for our audience.',
            tags: '#hip-hop #dnce #music'
        },
        {
            id:1,
            name : 'DJ Master Class',
            image: dj,
            content: 'We are happy to annouce this DJ Master Class. We are happy to annouce this DJ Master Class.',
            tags: '#hip-hop #dj #master-class'
        },
        {
            id:1,
            name : "Night Party",
            image: nightParty,
            content: 'We are happy to annouce this special show. We are happy to annouce this special show.',
            tags: '#party #night #live #music'
        }
    ]
  return (
    <div className='details-component'>
        <Details image={eventDetails[0].image} name={eventDetails[0].name} content = {eventDetails[0].content} tags = {eventDetails[0].tags}></Details>
        <Details image={eventDetails[1].image} name={eventDetails[1].name} content = {eventDetails[1].content} tags = {eventDetails[1].tags}></Details>
        <Details image={eventDetails[2].image} name={eventDetails[2].name} content = {eventDetails[2].content} tags = {eventDetails[2].tags}></Details>
        <Details image={eventDetails[3].image} name={eventDetails[3].name} content = {eventDetails[3].content} tags = {eventDetails[3].tags}></Details>
        
    </div>
  )
}

export default DetailsComponent
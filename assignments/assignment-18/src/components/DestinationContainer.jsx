import React from 'react'
import Destination from './Destination';
import './DestinationContainer.css';
import image_1 from '../images/1.jpg'
import image_2 from '../images/2.jpg'
import image_3 from '../images/3.jpg'

function DestinationContainer() {

    const destinations = [
        {
            id:1,
            image:image_1,
            name:"Rishikesh",
            description:"Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India  Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India "
        },
        {
            id:2,
            image:image_3,
            name:"Shillong",
            description:"Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India  Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India "
        },
        {
            id:3,
            image:image_2,
            name:"Spiti",
            description:"Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India  Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of India "
        }
    ]
    return (
        <div className='destination-container'>
            <Destination image={destinations[0].image} name={destinations[0].name} description={destinations[0].description} class="-left"></Destination>
            <Destination image={destinations[1].image} name={destinations[0].name} description={destinations[0].description} class="-center"></Destination>
            <Destination image={destinations[2].image} name={destinations[2].name} description={destinations[2].description} class="-right"></Destination>
        </div>
    )
}

export default DestinationContainer
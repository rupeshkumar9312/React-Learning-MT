import React from 'react'
import classes from './AvailableMeals.module.css'

function AvailableMeals() {

    const mealItems = [
        {
            id: 1,
            name: "Sushi",
            desc: "Finest fish and veggies",
            price: 22.99
        },
        {
            id: 2,
            name: "Schnitzel",
            desc: "A german specialty",
            price: 16.50
        }
    ]

    return (
        <section>
            {mealItems.map((items) => {
                return <li>{items.name}</li>
            })}
        </section>
    )
}

export default AvailableMeals
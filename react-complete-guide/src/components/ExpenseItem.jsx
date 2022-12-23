import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString('en-US', { day: '2-digit' })
    const title = props.title
    const amount = props.amount
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
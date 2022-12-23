import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
    const expenseDate = props.date.toLocaleString();
    const title = props.title
    const amount = props.amount
    return (
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
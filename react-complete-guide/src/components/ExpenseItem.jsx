import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const title = 'Car Insurance'
    const amount = 296.23
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
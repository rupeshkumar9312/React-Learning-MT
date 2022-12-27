import React from 'react'
import { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'



function ExpenseItem(props) {

    const [title,setTitle] = useState(props.title);
    const amount = props.amount;
    const date = props.date;

    const clickHandler = () => {
        setTitle('updated')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    )
}

export default ExpenseItem
import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  
  const savedExpenseDataHandler = enteredExpenseData =>{
    
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={savedExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      date: new Date(2022, 23, 9),
      amount: 342.45
    },
    {
      id: 2,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
    {
      id: 3,
      title: 'Car Insurance',
      date: new Date(2022, 23, 9),
      amount: 342.45
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]

  const [expense, setExpenses] = useState(expenses)
  const expenseDataHandler = (enteredData) => {
    // console.log(enteredData)
    expenses.push(enteredData);
    // console.log("-----------");
    // const expenseData = {
    //   ...enteredData,
    //   id:Math.random().toString()
    // };
    // props.onAddExpense(expenseDataHandler);
    // console.log(expense)
    setExpenses((prevExpenses)=>{
      return [enteredData,...prevExpenses]
    });
    console.log("-----")
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={expenseDataHandler}/>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;

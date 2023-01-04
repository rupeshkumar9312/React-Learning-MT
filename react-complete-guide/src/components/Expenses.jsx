import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  // console.log("props.items[0].title")
  const data = props.items;
  // console.log(data)
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
    // console.log(filteredYear)
  }
  return (

    <div>

      <Card className="expenses">
      <ExpensesFilter onChangeFilter = {filterChangeHandler}></ExpensesFilter>
      {console.log(props.items)}
      {console.log(props.items)}
      {props.items.map((expense)=> <ExpenseItem title={expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}
      {/* {props.items.map(expense = <ExpenseItem title = {expense.title} amount = {expense.amount} data={expense.data}></ExpenseItem>)} */}
      </Card>

    </div>
  );
}

export default Expenses;
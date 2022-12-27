import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

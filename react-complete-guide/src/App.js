import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const data = [
    {
      id: 1,
      title: 'Car Insurance',
      date: new Date(2022, 23, 9),
      amount: 342.45
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]
  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <ExpenseItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpenseItem>
      <ExpenseItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpenseItem>
    </div>
  );
}

export default App;

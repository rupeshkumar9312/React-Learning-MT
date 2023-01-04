import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ListTodo></ListTodo>
    </div>
  );
}

export default App;

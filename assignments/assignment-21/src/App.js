import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DetailsComponent from './components/DetailsComponent';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <DetailsComponent></DetailsComponent>
      
    </div>
  );
}

export default App;

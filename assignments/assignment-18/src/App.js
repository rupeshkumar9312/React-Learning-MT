import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import DisplayHeader from './components/DisplayHeader';
import DestinationContainer from './components/DestinationContainer';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <DisplayHeader></DisplayHeader>
      <DestinationContainer></DestinationContainer>
    </div>
  );
}

export default App;

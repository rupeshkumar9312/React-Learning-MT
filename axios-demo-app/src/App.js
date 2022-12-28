import logo from './logo.svg';
import './App.css';
import FirstRequest from './components/FirstRequest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImageComponent from './components/ImageComponent';
import SharedComponent from './components/SharedComponent';
import { useState } from 'react';

function App() {
  const [data,setData] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SharedComponent/>}>
            <Route index  element={<FirstRequest setData = { setData }/>}/>
            <Route path=':dataId' element={<ImageComponent   data = { data }/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

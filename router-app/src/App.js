import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import PageNotFound from './components/pages/PageNotFound';
import Admin from './components/pages/Admin';
import User from './components/pages/User';

function App() {

  return (
    <BrowserRouter>
      <div className='navbar-div'>
        <Link to={'/'}>Home</Link>
        <Link to={'/services'}>Services</Link>
        <Link to={'/about'}>About Us</Link>
        <Link to={'/contact'}>Contact Us</Link>
      </div>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

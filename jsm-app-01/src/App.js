import './App.css';
import { Blog, Feature, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, CTA, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

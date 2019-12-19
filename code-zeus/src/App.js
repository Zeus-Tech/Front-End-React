import React from 'react';
import Navigation from './components/navigation';
import Contact from './components/pages/contact';
import {Route} from 'react-router-dom';
import Home from './components/pages/home';

import banner from './images/banner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <img className='banner' src={banner} alt='website banner'/>
      </header>
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
    </div>

  );
}

export default App;

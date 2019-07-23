import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/navBar'
import MacNav from './components/innerNavbar/macNav'
import IpadNav from './components/innerNavbar/ipadNav'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path='/mac' component={MacNav}/>
      <Route path='/ipad' component={IpadNav}/>
    </div>
  );
}

export default App;

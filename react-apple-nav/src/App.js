import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/navBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;

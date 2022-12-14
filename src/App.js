import React from 'react';
import './App.css';
import Counter from './components/Counter';

import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Counter/>
    </div>
  );
}

export default App;

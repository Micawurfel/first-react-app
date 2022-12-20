import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemDetailContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <Router>

      <div className="App">
        <NavBar/>
      
        <Routes>

          <Route path='/catergoria' element={<ItemDetailContainer/>} />

          <Route path='/detalle' element={<ItemDetailContainer/>} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;

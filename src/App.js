import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/cartContext';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'; 



function App() {

  return (

    <CartContextProvider>
    <Router>

      <div className="App">
        <NavBar/>
      
        <Routes>

          <Route path='/' element={<ItemListContainer/>} />

          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />

          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />

          <Route path='/carrito' element={<Cart/>} />

        </Routes>
      </div>

    </Router>
    </CartContextProvider>
  );
}

export default App;

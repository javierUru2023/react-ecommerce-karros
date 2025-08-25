import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';
import ProductosPorCategoria from './components/ProductosPorCategoria';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import './App.css';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ItemDetail />} />
              <Route path="/productos/:categoria" element={<ProductosPorCategoria />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
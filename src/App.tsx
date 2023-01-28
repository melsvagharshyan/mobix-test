import styles from './App.module.scss';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AddProduct from './components/AddProduct';
import BuyModal from './Portals/BuyModal/BuyModal';
import React from 'react';

function App() {
  return (
    <div className={styles.App}>
      <BuyModal />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

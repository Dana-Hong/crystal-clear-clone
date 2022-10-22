import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductCategory from './ProductCategory';
import ProductDetailed from './ProductDetailed';
import Footer from './Footer';

import { waterSoftenerData } from './water-softener-data';
import { reverseOsmosisData } from './reverse-osmosis-data';

function App() {
  // const [cart, setCart] = useState([]);

  return (
      <div className='app'>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            element={<Home/>} />
          <Route
            path='/products'
            element={<Products />} />
          <Route
            path='/products/water-softeners'
            element={<ProductCategory productData={waterSoftenerData}/>} />
          <Route
            path='/products/reverse-osmosis'
            element={<ProductCategory productData={reverseOsmosisData}/>} />
          <Route
            path='/products/water-softeners/crystal-comfort'
            element={<ProductDetailed productData={waterSoftenerData.models[0]}/>} />
          <Route
            path='/products/water-softeners/crystal-vision'
            element={<ProductDetailed productData={waterSoftenerData.models[1]}/>} />
          <Route
            path='/products/water-softeners/crystal-perform'
            element={<ProductDetailed productData={waterSoftenerData.models[2]}/>} />
          <Route
            path='/products/water-softeners/crystal-ultra'
            element={<ProductDetailed productData={waterSoftenerData.models[3]}/>} />
          <Route
            path='/products/water-softeners/crystal-classic'
            element={<ProductDetailed productData={waterSoftenerData.models[4]}/>} />
          <Route
            path='/products/water-softeners/crystal-pro'
            element={<ProductDetailed productData={waterSoftenerData.models[5]}/>} />
          <Route
            path='/products/water-softeners/crystal-maxx'
            element={<ProductDetailed productData={waterSoftenerData.models[6]}/>} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;

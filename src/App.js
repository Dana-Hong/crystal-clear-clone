import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductCategory from './ProductCategory';
import Footer from './Footer';

import { waterSoftenerData } from './water-softener-data';
import { reverseOsmosisData } from './reverse-osmosis-data';

function App() {
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
            path='/products/water-softeners/crystalVision'
            element={<ProductCategory productData={waterSoftenerData}/>} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;

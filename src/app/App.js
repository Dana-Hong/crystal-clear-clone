import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../shared/components/Header';
// import Hero from '../home/components/Hero';
// import About from '../home/components/About';
// import ProductsAndServices from '../home/components/ProductsAndServices';
// import Form from '../home/components/Form';
import Home from '../home/components/Home';
import ProductsMain from '../products/components/ProductsMain';
import Products from '../products/components/Products';
import Service from '../service/components/Service';
import AboutUs from '../about_us/AboutUs';
import Footer from '../shared/components/Footer';
import { products } from './data';
import economy from '../products/economy/crystal-comfort.JPG';
import highEfficiency from '../products/high-efficiency/imgs';
import superEfficient from '../products/super-efficient/imgs';
import ProductCategories from '../products/components/ProductCategories';


function App() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    // console.log('hey button working');
    setNavOpen(preNavOpen => !preNavOpen);
  }

  return (
    <div className={`App ${navOpen ? 'nav-open' : ''}`}>
        <Header navOpen={navOpen} toggleNav={toggleNav}/>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />
          <Route 
            path='/products'
            element={<ProductsMain />}
          />
          <Route 
            path='/service'
            element={<Service />}
          />
          <Route
            path='/flyer'
            element={''}
          />
          <Route
            path='/financing'
            element={''}
          />
          <Route
            path='/about'
            element={<AboutUs />}
          />
          <Route
            path='/contact'
            element={''}
          />
          <Route
            path='/products/water-softeners'
            element={<ProductCategories imgs={[economy, highEfficiency, superEfficient]} />}
           />
          <Route
            path='/products/saltless-water-alternatives'
            element={<ProductCategories imgs={''} />}
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
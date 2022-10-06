import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../shared/components/Header';
// import Hero from '../home/components/Hero';
// import About from '../home/components/About';
// import ProductsAndServices from '../home/components/ProductsAndServices';
// import Form from '../home/components/Form';
import Home from '../home/components/Home';
import Service from '../service/components/Service';
import Footer from '../shared/components/Footer';


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
            path='/about_us'
            element={''}
          />
          <Route
            path='/contact'
            element={''}
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
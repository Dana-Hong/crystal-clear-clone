import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Products from './Products';
import Footer from './Footer';

function App() {
  return (
      <div className='app'>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            element={<Home/>}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/products/water-softeners'
            element={''} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;

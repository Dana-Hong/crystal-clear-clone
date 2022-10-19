import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
      <div className='app'>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            element={<Home/>} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Widget from './Widget';
import FormElement from './Form';
import Footer from './Footer';
import widget1 from './imgs/widget-01.jpg';
import widget2 from './imgs/widget-02.jpg';
import widget3 from './imgs/widget-03.jpg';


function App() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    // console.log('hey button working');
    setNavOpen(preNavOpen => !preNavOpen);
  }

  const widgetPaths = [widget1, widget2, widget3];
  const widgetElements = widgetPaths.map((widget, index) => <Widget key={index} path={widget} />)

  return (
    <div className={`App ${navOpen ? 'nav-open' : ''}`}>
        <Header navOpen={navOpen} toggleNav={toggleNav}/>
        <Hero/>
        <About/>
        <div className='products-services'>
          <h1 className='products-services__title'>Choose from a variety of products and services</h1>
          <div className='products-services-widgets'>
            {widgetElements}
          </div>
        </div>
        <h1 className='form-title'>Get a quick quote</h1>
        <FormElement />
        <Footer />
    </div>
  );
}

export default App;
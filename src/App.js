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
  const widgetPaths = [widget1, widget2, widget3];
  const widgetElements = widgetPaths.map((widget, index) => <Widget key={index} path={widget} />)

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        {widgetElements}
        <FormElement />
        <Footer />
    </div>
  );
}

export default App;

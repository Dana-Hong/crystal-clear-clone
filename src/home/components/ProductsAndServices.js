import Widget from "./Widget";
import widget1 from '../imgs/widget-01.jpg';
import widget2 from '../imgs/widget-02.jpg';
import widget3 from '../imgs/widget-03.jpg';

export default function ProductsAndServices(props) {  
  const widgetPaths = [widget1, widget2, widget3];
  const widgetElements = widgetPaths.map((widget, index) => <Widget key={index} path={widget} />)

  return (
    <div className='products-services'>
        <h1 className='products-services__title'>Choose from a variety of products and services</h1>
        <div className='products-services-widgets'>
        {widgetElements}
        </div>
    </div>
  )
}
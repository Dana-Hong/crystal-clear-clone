import { useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';
import ProductCategory from './ProductCategory';
import ProductDetailed from './ProductDetailed';
import Footer from './Footer';

import { CartContext } from './CartContext';

import { waterSoftenerData } from './water-softener-data';
import { reverseOsmosisData } from './reverse-osmosis-data';

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);
  
  function addItem(productName, quantity) {
    const itemAlreadyInCart = cart.some(item => item.name === productName);
    if (itemAlreadyInCart) {
      setCart(prevCart => {
        return prevCart.map(item => {
          if (item.name === productName) {
            return {
              ...item,
              quantity: item.quantity + quantity
            }
          } else {
            return item;
          }
        });
      });
    } else {
      const [ addedItem ] = waterSoftenerData.models.filter(model => model.name === productName);
      const newItem = {
        name: addedItem.name,
        price: addedItem.regPrice,
        img: addedItem.img,
        path: addedItem.path,
        quantity: quantity
      }
      
      setCart(prevCart => {
        // console.log('test', typeof(quantity));
        // const [ newProduct ] = waterSoftenerData.models.filter(model => model.name === productName);
        // const [ test ] = waterSoftenerData.models.filter(model => model.name === productName);
        // const newProductArray = Array(quantity).fill(newProduct);
        
        return [...prevCart, newItem];
      });
    }
    
  }

  useEffect(() => {
    if (cart.length !== 0) {
      setCartEmpty(false);
    }
    setCartQuantity(prevCartQuantity => {
      return cart.reduce((prevCartQuantity, currentCartItem) => {
        return prevCartQuantity + currentCartItem.quantity;
      }, 0);
    });
    setCartTotal(prevCartTotal => {
      return cart.reduce((prevCartSubtotal, currentCartItem) => {
        return prevCartSubtotal + (currentCartItem.price * currentCartItem.quantity);
      }, prevCartTotal);
    });
    
    console.log('total:', cartQuantity);

  }, [cart])

  return (
      <div className='app h-full w-full'>
          <Header cartEmpty={cartEmpty} /> 
              <Routes>
                  <Route 
                    path='/' 
                    element={<Home/>} />
                  <Route 
                    path='/cart' 
                    element={<Cart cart={cart} cartQuantity={cartQuantity} cartTotal={cartTotal} />} />
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
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                        <ProductDetailed productData={waterSoftenerData.models[0]}/>
                    </CartContext.Provider>
                  } />
                <Route
                  path='/products/water-softeners/crystal-vision'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                        <ProductDetailed productData={waterSoftenerData.models[1]}/>
                    </CartContext.Provider>
                    } />
                <Route
                  path='/products/water-softeners/crystal-perform'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                    <ProductDetailed productData={waterSoftenerData.models[2]}/>
                    </CartContext.Provider>
                  } />
                <Route
                  path='/products/water-softeners/crystal-ultra'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                      <ProductDetailed productData={waterSoftenerData.models[3]}/>
                    </CartContext.Provider>
                  } />
                <Route
                  path='/products/water-softeners/crystal-classic'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                      <ProductDetailed productData={waterSoftenerData.models[4]}/>
                    </CartContext.Provider>
                  } />
                <Route
                  path='/products/water-softeners/crystal-pro'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                      <ProductDetailed productData={waterSoftenerData.models[5]}/>
                    </CartContext.Provider>
                  } />
                <Route
                  path='/products/water-softeners/crystal-maxx'
                  element={
                    <CartContext.Provider value={{addItem, cart}}>
                      <ProductDetailed productData={waterSoftenerData.models[6]}/>
                    </CartContext.Provider>
                  } />
  
              </Routes>
          <Footer />

      </div>
  );
}

export { App, CartContext };

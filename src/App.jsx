import { useState, useEffect } from 'react'
import { Header } from './components/Header';
import { Guitar } from './components/Guitar';
import { db } from './data/db';

function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {

    const itemExists = cart.find((elem) => elem.id === item.id);

    if (!itemExists) {
      item.quantity = 1;
      setCart([...cart, item]);
    } else {
      const updatedCart = cart.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, quantity: elem.quantity + 1 };
        }
        return elem;
      });
      setCart(updatedCart);
    }
  };

  const handleRemove = (id) => {
    const deleteGuitar = cart.filter(item => item.id !== id);
    setCart(deleteGuitar);
  }

  const increaseGuitar = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity + 1
        }
      }
      return item;
    })
    setCart(updatedCart);
  };

  const decreaseGuitar = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity >= 2) {
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item;
    })
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cart={cart}
        handleRemove={handleRemove}
        increaseGuitar={increaseGuitar}
        decreaseGuitar={decreaseGuitar}
        clearCart={clearCart} />

      <div className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          <Guitar handleAddToCart={handleAddToCart} />
        </div>
      </div>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Guitar Music - All rights reserved</p>
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Made by <a href="https://github.com/SebaFretes/" target="_blank"><span style={{color: '#e99401'}}>Sebastian Fretes</span></a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

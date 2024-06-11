import { useState } from 'react'
import { Header } from './components/Header';
import { Guitar } from './components/Guitar';
import { db } from './data/db';

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  const handleAdd = (item) => {
    
    const itemExists = cart.find((elem) => elem.id === item.id);

    if(!itemExists) {
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
  }

  return (
    <>
      <Header cart={cart}/>

      <div className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          <Guitar handleAdd={handleAdd} />
        </div>
      </div>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Guitar Music - All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

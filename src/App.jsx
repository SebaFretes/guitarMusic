import { useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Guitar } from './components/Guitar';
import { db } from './data/db';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(db);
  }, [])

  return (
    <>
    <Header />

    <div className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          <Guitar />        
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

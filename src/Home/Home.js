import React from 'react';
import Cart from '../components/Cart/Cart';
import TShirt from '../components/TShirt/TShirt';
import useTshirts from '../hooks/useTshirt';
import './Home.css'
 

const Home = () => {
    const [tshirts, setTshirts]= useTshirts();
    return (
        <div className='home-container'>
          <div className="tshirt-container">
              <h1>Length: {tshirts.length}</h1>
              {
                  tshirts.map(tshirt => <TShirt tshirt={tshirt}></TShirt>)
              }

          </div>
          <div className="cart-container">
              <Cart></Cart>
          </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';
import TShirt from '../components/TShirt/TShirt';
import useTshirts from '../hooks/useTshirt';
import './Home.css'


const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else{
            alert('item already added');
        }
    }

    const handleRemoveCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)

    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">

                {
                    tshirts.map(tshirt => <TShirt
                        handleAddtoCart={handleAddtoCart}
                        key={tshirt._id} tshirt={tshirt}>

                    </TShirt>)
                }

            </div>
            <div className="cart-container">
                <Cart handleRemoveCart={handleRemoveCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
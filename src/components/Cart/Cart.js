import React from 'react';
 
 
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h3>Items selected: {cart.length}</h3>
            {
                cart.map(tShirt => <p>{tShirt.name } <button onClick={()=>handleRemoveCart(tShirt)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;
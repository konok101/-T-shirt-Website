import React from 'react';
 
 
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h3>Items selected: {cart.length}</h3>
            {
                cart.map(tShirt =>
                     <p>{tShirt.name } <button onClick={()=> handleRemoveCart(tShirt)}>X</button>
                      </p>)
            }
            {cart.length !==4 ? <p>keep adding</p>: <button>Remove  item</button>}
            {cart.length === 3 && <div className='orange'>
                <h3>Threee item added</h3>
                <p>Now i provide 10% off</p>
                 </div>}
                 {cart.length === 0 || <p className='orange'>Yay you are buying</p>}
        </div>
    );
};

export default Cart;
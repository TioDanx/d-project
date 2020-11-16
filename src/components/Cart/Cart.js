import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { removeFromCart, clearCart, cart } = useCartContext();
    let total = 0;

    const handleRemove = (itemID) => {

        removeFromCart(itemID);
    }

    return <div className="cart-container">
        {cart.map(obj => <div className="cart-item">
            <img src={obj.item.photo} alt={obj.item.name} />
            <div className="cart-item-midpart">
                <h1>{obj.item.name} x{obj.cant}</h1>
                <p>{obj.item.description}</p>
            </div>
            <div className="cart-item-rightpart">
                <h2>${obj.item.price}</h2>
                <button className="button" /* onClick={removeFromCart(obj.item.id) }*/ >Borrar del carro</button>
            </div>
        </div>)}
        {console.log(cart)}
        <div className="cart-bottom">
            {cart.map(obj => { total = obj.item.price * obj.cant + total })}            
            <h1>Total: ${total}</h1>
            <button className="button" onClick={clearCart}>Limpiar carro</button>
        </div>
    </div>
}

export default Cart;

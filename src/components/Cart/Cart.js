import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import Loading from '../Loading/Loading';

const Cart = () => {
    const { removeFromCart, clearCart, cart } = useCartContext();
    const [loading, setLoading] = useState(true);
    let total = 0;

    const handleRemove = (itemID) => {

        removeFromCart(itemID);
    }
    setTimeout(() => {
        setLoading(false)
    }, 1500);

    return <> {loading && <Loading />}
        {!loading && <div className="cart-container">
            {cart.map(obj => <div className="cart-item">
                <img src={obj.item.photo} alt={obj.item.name} />
                <div className="cart-item-midpart">
                    <h1>{obj.item.name} x{obj.cant}</h1>
                    <p>{obj.item.description}</p>
                </div>
                <div className="cart-item-rightpart">
                    <h2>${obj.item.price}</h2>
                    <button className="button" onClick={() => removeFromCart(obj.item.id, obj.cant)} >Borrar del carro</button>
                </div>
            </div>)}
            {console.log("este es el carro que recibe Cart.js", cart)}
            <div className="cart-bottom">
                {cart.map(obj => { total = obj.item.price * obj.cant + total })}
                <h1>Total: ${total}</h1>
                <button className="button" onClick={clearCart}>Limpiar carro</button>
            </div>
        </div>}
    </>
}

export default Cart;

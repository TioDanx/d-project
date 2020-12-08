import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import 'firebase/firestore';
import Error from '../Error/Error';


const Cart = () => {
    const { removeFromCart, clearCart, cart } = useCartContext();
    let total = 0;


    return <>{cart.length === 0 && <Error text="¡No hay nada en el carro!" />}
        {cart.length > 0 && <div className="cart-container">
            {cart.map(obj => <div className="cart-item">
                <img src={obj.item.photo} alt={obj.item.name} />
                <div className="cart-item-midpart">
                    <h1>{obj.item.name} x{obj.cant}</h1>
                    <p style={{marginTop:'20px'}}>{obj.item.description}</p>
                </div>
                <div className="cart-item-rightpart">
                    <h2>${obj.item.price}</h2>
                    <button className="button" onClick={() => removeFromCart(obj.item.id, obj.cant)} >Borrar del carro</button>
                </div>
            </div>)}
            <div className="cart-bottom">
                {cart.map(obj => { total = obj.item.price * obj.cant + total })}
                <button className="button" onClick={clearCart}>Limpiar carro</button>
                <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}><button className="button">Terminar compra</button></Link>
                <h1>Total: ${total}</h1>
            </div>
        </div>}

    </>
}

export default Cart;

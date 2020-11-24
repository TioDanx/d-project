import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


const Cart = () => {
    const { removeFromCart, clearCart, cart } = useCartContext();
    let total = 0;

    /* items.docs.map(d => ({ ...d.data(), id: d.id })).map(({ id, title, price, stock }) => ({ id, title, price, stock }))

        .where(firebase.firestore.FieldPath.documentId(),
            'in', ['Q0VfIIoYzn6Lpc2FBQUg', 'iEuV6tEihe7345pKDL7A'])
        .get(); */




    return <>
        <div className="cart-container">
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

                <button className="button" onClick={clearCart}>Limpiar carro</button>
                <Link to="/checkout" className="button" style={{ textDecoration: 'none',}}>Terminar compra</Link>
                <h1>Total: ${total}</h1>
            </div>
        </div>
    </>
}

export default Cart;

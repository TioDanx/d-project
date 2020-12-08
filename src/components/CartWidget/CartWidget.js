import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


function CartWidget() {
    const { cantItems } = useCartContext();
    return <div className="cart-pos">
        <div className="iconos-compra">
            <Link to="/cart"><span className="cart"></span></Link>
            <span className="cart-counter">{cantItems}</span>
        </div>;
        </div>
}

export default CartWidget;
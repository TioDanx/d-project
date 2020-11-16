import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


function CartWidget() {
    const { cantItems } = useCartContext();
    return <div className="iconos-compra">
        <Link to="/cart"><span className="cart"></span></Link>
        <h2>{cantItems}</h2>
    </div>;
}

export default CartWidget;
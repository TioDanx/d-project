import React from 'react';
import carro from './cart.svg';
import './CartWidget.css'


function CartWidget() {
return <div className="iconos-compra">
            <a href="#"><img width="40" height="40" src={carro} alt="Carrito" /></a>
        </div>;
}

export default CartWidget;
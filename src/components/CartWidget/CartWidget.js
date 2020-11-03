import React from 'react';
import './CartWidget.css';
import {Link} from 'react-router-dom';


function CartWidget() {
return <div className="iconos-compra">
            <Link to="/cart"><span className="cart"></span></Link>
        </div>;
}

export default CartWidget;
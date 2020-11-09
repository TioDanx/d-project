import React from 'react';
import {Link} from 'react-router-dom';
import './EndShopping.css';

const EndShopping = () => {
    return <Link to="/cart"><div className="end-shopping"><button>Terminar mi compra</button></div></Link>
}

export default EndShopping;

import React from 'react';
import {Link} from 'react-router-dom';
import './EndShopping.css';

const EndShopping = () => {
    return <Link to="/cart"><button className="end-shopping">Terminar compra</button></Link>;
}

export default EndShopping;

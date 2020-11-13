import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    
    return <>
    <div className="navbar">
        <div className="navtext">
            <Link to="/" className="titulo">D-PROJECT</Link>
            <a href="#">Ofertas del dia</a>
            <a href="#">Destacados</a>
            <a href="#">Soporte</a>
        </div>
        <CartWidget />
        
    </div>
    </>;
}

export default NavBar;
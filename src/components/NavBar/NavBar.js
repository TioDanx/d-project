import React from 'react';
import CartWidget from '../CartWidget/CartWidget.js'
import './NavBar.css';

function NavBar() {
    return <>
    <div className="navbar">
        <div className="navtext">
            <a href="#" className="titulo">D-PROJECT</a>
            <a href="#">Ofertas del dia</a>
            <a href="#">Destacados</a>
            <a href="#">Soporte</a>
        </div>
        <CartWidget />
    </div>
    </>;
}

export default NavBar;
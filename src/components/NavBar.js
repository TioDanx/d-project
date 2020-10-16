import React from 'react';
import carro from '../cart.svg';
import '../App.css';

function NavBar() {
    return <>
    <div className="navbar">
        <div className="navtext">
            <a href="#" className="titulo">D-PROJECT</a>
            <a href="#">Ofertas del dia</a>
            <a href="#">Destacados</a>
            <a href="#">Soporte</a>
        </div>
        <div className="iconos-compra">
            <a href="#"><img width="40" height="40" src={carro} alt="Carrito" /></a>
        </div>
    </div>
    </>;
}

export default NavBar;
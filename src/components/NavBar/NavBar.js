import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    console.log(React.version);
    return <><div className="collapsable-menu">
        <input type="checkbox" class="checkbox" id="menu-toogle" />
        <label for="menu-toogle" class="menu-toogle"></label>
        <nav class="nav">
            <Link to="/" class="nav__item">Inicio</Link>
            <Link to="/cart" class="nav__item">Carro</Link>
            <a href="#" class="nav__item">🔥Hot Sale🔥</a>
            <a href="#" class="nav__item">¿Quienes somos?</a>
            <a href="#" class="nav__item">Contactanos!</a>
        </nav>
    </div>
        <div className="nav-container">
            <Link to="/" className="nav-title">D-COMMERCE</Link>
        </div>

        <CartWidget /></>;
}

export default NavBar;
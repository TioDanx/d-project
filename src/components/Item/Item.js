import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, photo, price }) => {

    return <Link to={`item/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="item">
            <div className="item-photo">
                <img src={photo} alt={name} width="250" height="250" />
            </div>
            <h2 className="item-name">{name}</h2>
            <hr />
            <h2 className="item-price">${price}</h2>
            <span>Añadir al carro</span>
        </div>
    </Link>
}

export default Item;



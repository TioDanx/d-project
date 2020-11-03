import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({ id, name, photo, price}) => {

    return  <Link to={`item/${id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <div className="item">
                    <div className="item-photo">
                        <img src={photo} alt={name} width="250" height="250"/>
                    </div>
                    <div className="item-description">
                        <h1 className="item-name">{name}</h1>
                        <h1 className="item-price">${price}</h1>
                    </div>
                </div>
            </Link>
}

export default Item;



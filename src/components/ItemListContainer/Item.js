import React from 'react';
import './Item.css';

const Item = ({name, photo, price}) => {
    return  <div className="item">
                <div className="item-photo">
                    <img src={photo} alt={name} width="250" height="250"/>
                </div>
                <div className="item-description">
                    <h1 className="item-name">{name}</h1>
                    <h2 className="item-price">${price}</h2>
                </div>
            </div>;
}

export default Item;



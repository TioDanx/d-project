import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({titulo}) {
    return <div className="itemList">
        <div className="itemTitle"><h1>{titulo}</h1></div>
        
        <div className="itemImage">
            <img src="#" alt=""/>
        </div>

        <div className="itemText">
            <h1 className="itemName">Nombre del item</h1>
            <br/>
            <hr/>
            <br/>
            <p className="itemDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur cum inventore accusamus neque saepe fugiat voluptatem alias. Aliquid sequi omnis voluptates tenetur ullam esse itaque ab quo harum iste.</p>
        </div>
        <div className="itemPrice">
            <p>$40</p>
        </div>
    </div>;    
}

export default ItemListContainer;
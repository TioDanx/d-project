import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

function ItemListContainer({itemsPromise, onFetch, titulo, items }) {

    useEffect(() => {itemsPromise.then(itemArray =>{ onFetch(itemArray)})}, []);

    return <>
        <div className="item-container">
            <div className="itemTitle"><h1>{titulo}</h1></div>
            <hr/>
            <ItemList {...{items}}></ItemList>
        </div>
    </>;
}

export default ItemListContainer;
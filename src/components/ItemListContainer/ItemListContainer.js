import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';

function ItemListContainer({itemsPromise, onFetch, titulo, items }) {
    const [loaded, setloaded] = useState(false);
    useEffect(() => {itemsPromise.then(itemArray =>{ 
        setloaded(true);
        onFetch(itemArray)})}, []);

    return <>
        <div className="item-container">
            <hr />
            <div className="itemTitle"><h1>{titulo}</h1></div>
            <hr/>
            { !loaded && <Loading />}
            { loaded && <ItemList {...{items}}></ItemList>}
        </div>
    </>;
}

export default ItemListContainer;
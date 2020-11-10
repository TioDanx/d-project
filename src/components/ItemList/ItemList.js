import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = ({items}) => {

    return <div className="item-list">
            {items.map( item => <Item key={item.id} id={item.id} name={item.name} photo={item.photo} price={item.price}></Item>)}
         </div>
}


export default ItemList;

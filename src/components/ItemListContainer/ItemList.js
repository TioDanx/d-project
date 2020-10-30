import React from 'react';
import Item from './Item';
import './ItemList.css';


const ItemList = ({items}) => {

    return <div className="item-list">{items.map( item => 
            <Item name={item.name} photo={item.photo} price={item.price}></Item>)}
         </div>
}


export default ItemList;

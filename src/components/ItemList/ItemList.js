import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';


const ItemList = ({ items, titulo, category }) => {

    const [categories, setCategories] = useState([]);
    const linkStyle = {
        fontSize: '20px',
        marginTop: '20px',
        textDecoration: 'none',
        color: 'inherit'
    };

    useEffect(() => {
        console.log(items);
        let aux = [];
        items.forEach(item => {
            if (!aux.find(obj => obj === item.category)) {
                aux.push(item.category);
            }
        });
        setCategories(aux);
    }, []);



    return <div className="categories-items">
        <div className="categories">
            <h3>Categorias</h3>
            {categories.map(category => <Link style={linkStyle} to={`/${category}`}>{category}</Link>)}
        </div>
        <div className="item-itemtitle">
            <div className="itemTitle">
                <h1>{titulo ? titulo : category}</h1>
            </div>
            <div className="item-list">
                {items.map(item => <Item key={item.id} id={item.id} name={item.name} photo={item.photo} price={item.price}></Item>)}
            </div>
        </div>
    </div>
}


export default ItemList;

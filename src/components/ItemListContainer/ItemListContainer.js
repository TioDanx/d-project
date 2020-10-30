import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer({titulo}) {
    const [items, setItems] = useState([]);

    const itemsPromise = new Promise((res, rej) => {
        setTimeout(() => {res([{name:"Tostadora", photo: "https://www.tiomusa.com.ar/imagenes/archivos/2017-02/140-13746-tostadoraoster6544blanco1tm.png", price: 20} ,
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Cocina", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20},
        {name:"Batidora", photo: "https://http2.mlstatic.com/batidora-planetaria-amasadora-bowl-5-lts-winco-vintage-700-w-D_Q_NP_874813-MLA40832749202_022020-F.webp", price: 20},
        {name:"Pava Electrica", photo: "https://www.tienda.philips.com.ar/1940-large_default/pava-electrica-philips-viva-collection-blanca-con-termostato.jpg", price: 20}])
    }, 2000)});
    
    useEffect(() => {
        itemsPromise.then(itemArray =>{
            setItems(itemArray);
        })
        }
    , []);

    return <>
        <div className="item-container">
            <div className="itemTitle"><h1>{titulo}</h1></div>
            <hr/>
            <ItemList {...{items}}></ItemList>
        </div>
    </>;
}

export default ItemListContainer;
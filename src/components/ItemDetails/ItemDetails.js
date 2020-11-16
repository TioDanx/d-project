import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import EndShopping from '../EndShopping/EndShopping';
import './ItemDetails.css';
import { useCartContext, CartContext } from '../../context/CartContext';
import Loading from '../Loading/Loading';

const ItemDetails = ({ item }) => {
    const [clicked, setclicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useCartContext();

    let available = 10;

    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();
            if (counter <= available && counter > 0) {
                addToCart(item, counter);
                setclicked(true);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
            else alert("Por favor quite items");
        }
    }


    return <div className="item-detail-box">
        <div className="item-detail-image">
            <img src={item.photo} alt={item.name} />
        </div>
        <div className="item-detail-description">
            <div className="item-detail-left">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>
            <div className="item-detail-right">
                <h2>${item.price}</h2>
                {!clicked && <ItemCount onAdd={handleAdd} {...{ available }} initial={1} />}
                {clicked && loading && <Loading />}
                {clicked && !loading && <EndShopping />}
            </div>
        </div>
    </div>;

}



export default ItemDetails;



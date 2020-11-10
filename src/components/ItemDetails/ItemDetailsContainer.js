import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import Loading from '../Loading/Loading';

const ItemDetailsContainer =  ({itemsPromise}) => {
    const [loaded, setloaded] = useState(false);
    const {id} = useParams(); 
    const [item, setItem] = useState([]);

    useEffect(() => {
        itemsPromise.then(itemArray => { 
            setloaded(true);
            let aux = itemArray.filter(item => item.id == id);
            setItem(aux[0])});
    }, []);

    return <div className="item-detail-container">
            { loaded && <ItemDetails description={item.description} name={item.name} photo={item.photo} price={item.price} /> }
            { !loaded && <Loading /> } 
        </div>
}

export default ItemDetailsContainer;
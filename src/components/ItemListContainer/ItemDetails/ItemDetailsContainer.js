import React, {useEffect, useState} from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css'

const ItemDetailsContainer = ({itemsPromise}) => {

    const {id} = useParams(); 
    const [item, setItem] = useState([]);

    

    useEffect(() => {
        itemsPromise.then(itemArray => { 
            let aux = itemArray.filter(item => item.id == id);
            setItem(aux[0])});
    }, []);

    return <div className="item-detail-container">
            <ItemDetails description={item.description} name={item.name} photo={item.photo} price={item.price}></ItemDetails>
        </div>
}

export default ItemDetailsContainer;
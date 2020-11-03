import React, {useEffect, useState} from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = ({itemsPromise}) => {

    const {id} = useParams(); 
    const [item, setItem] = useState([]);

    

    useEffect(() => {
        itemsPromise.then(itemArray => { 
            let aux = itemArray.filter(item => item.id == id);
            console.log(aux[0]);
            setItem(aux[0])});
    }, []);

    return <ItemDetails name={item.name} photo={item.photo} price={item.price}></ItemDetails>
}

export default ItemDetailsContainer;
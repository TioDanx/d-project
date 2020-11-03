import React, {useEffect, useState} from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = ({itemsPromise}) => {

    const {id} = useParams(); 
    const [item, setItem] = useState([]);

    

    useEffect(() => {
        itemsPromise.then(itemArray => { 
            let aux = itemArray.filter(item => item.id == id);
            console.log(aux);
            setItem(aux)});
    }, []);

    return <ItemDetails {...{item}}></ItemDetails>
}

export default ItemDetailsContainer;
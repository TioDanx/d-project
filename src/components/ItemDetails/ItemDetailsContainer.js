import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { getFirestore } from '../../firebase';


const ItemDetailsContainer = ({ itemsPromise }) => {
    const [loaded, setloaded] = useState(false);
    const [item, setItem] = useState([]);
    const [failed, setFailed] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const firebaseItem = itemCollection.doc(id);

        firebaseItem.get().then(doc => {
            console.log(doc);
            if (doc.exists) setItem({ id: doc.id, ...doc.data() });
            else setFailed(true);
        }).finally(() =>{
            setloaded(true);
        });

    }, []);
    
    return <div className="item-detail-container">
        {loaded && !failed && <ItemDetails {...{ item }} />}
        {loaded && failed && <Error text="¡Ups! El item no existe" />}
        {!loaded && <Loading />}
    </div>
}

export default ItemDetailsContainer;
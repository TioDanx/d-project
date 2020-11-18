import React, { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import Loading from '../Loading/Loading';
import { getFirestore } from '../../firebase';


const ItemDetailsContainer = ({ itemsPromise }) => {
    const [loaded, setloaded] = useState(false);
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);

        item.get().then(doc => {
            setItem({ id: doc.id, ...doc.data() });
        }).finally(() => {
            setloaded(true);
        });

    }, []);

    return <div className="item-detail-container">
        {loaded && <ItemDetails {...{ item }} />}
        {!loaded && <Loading />}
    </div>
}

export default ItemDetailsContainer;
import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getFirestore } from '../../firebase';
import { useParams } from 'react-router-dom';

function ItemListContainer({ titulo }) {
    const [loaded, setloaded] = useState(false);
    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        console.log(titulo);
        if (!category) {
            itemCollection.get().then((querySnapshot) => {
                let aux = [];
                querySnapshot.docs.map(doc => aux.push({ id: doc.id, ...doc.data() }));
                setItems(aux);
                setloaded(true);
            });
        }
        else {
            let categoryItems = itemCollection.where('category', '==', category);
            categoryItems.get().then((querySnapshot) => {
                let aux = [];
                querySnapshot.docs.map(doc => aux.push({ id: doc.id, ...doc.data() }));
                setItems(aux);
                setloaded(true);
            });
        }
    }, [category]);



    return <>
        <div className="item-container">
            <hr />
            <div className="itemTitle">
                <h1>{titulo ? titulo : category}</h1>
            </div>
            <hr />
            {!loaded && <Loading />}
            {loaded && <ItemList {...{ items }}></ItemList>}
        </div>
    </>;
}

export default ItemListContainer;
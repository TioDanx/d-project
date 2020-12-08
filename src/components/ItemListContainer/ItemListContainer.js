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
        {!loaded && <Loading />}
        {loaded && <div className="body-wrapper"><div className="welcome-container">
            <div className="welcome">
                <h4>¡Bienvenidos!</h4>
                <span>D-COMMERCE</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque quidem corrupti animi beatae velit odit optio ullam eligendi, voluptates ratione fugit, nihil perspiciatis earum pariatur nemo maxime, accusantium debitis.</h5>
            </div>
        </div>
            <div className="item-container">


                <ItemList {...{ titulo }} {...{ category }}{...{ items }}></ItemList>
            </div></div>}
    </>;
}

export default ItemListContainer;
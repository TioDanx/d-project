import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetails.css';

const ItemDetails = ({item}) => {
    
    let available = 10; 
    const handleAdd = (counter) => {

        return () => {
            if(counter <= available){
            alert(`se van a agregar ${counter} items a su carrito` );
            }
            else alert("Por favor quite items" );
        }
    }

    return <div className="item-detail-container">
        <div className="image">
            <img src={item.photo} alt={item.name}/>
        </div>
        <div className="item-detail-description">
            <h1>{item.name}</h1>
            <ItemCount onAdd={handleAdd} {...{available}} initial={1}></ItemCount>
        </div>
    </div>;

}



export default ItemDetails;

    

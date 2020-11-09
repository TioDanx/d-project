import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import EndShopping from '../../EndShopping/EndShopping';
import './ItemDetails.css';

const ItemDetails = ({description, photo, name, price}) => {
    const [clicked, setclicked] = useState(false);
    
    let available = 10; 
    
    const handleAdd = (counter) => {
        return (evt) => {
            evt.stopPropagation();
            if(counter <= available && counter > 0){
                alert(`se van a agregar ${counter} items a su carrito` );
                setclicked(true);
            }
            else alert("Por favor quite items" );
        }
    }


    return <div className="item-detail-box">
                <div className="item-detail-image">
                    <img src={photo} alt={name}/>
                </div>
                <div className="item-detail-description">
                    <div className="item-detail-left">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="item-detail-right">
                        <h2>${price}</h2>
                        { !clicked && <ItemCount onAdd={handleAdd} {...{available}} initial={1} />}
                        { clicked && <EndShopping /> }
                    </div>
                </div>
            </div>;

}



export default ItemDetails;

    

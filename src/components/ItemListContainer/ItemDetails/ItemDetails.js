import React, {useEffect} from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetails.css';

const ItemDetails = ({photo, name, price}) => {
    
    let available = 10; 
    const handleAdd = (counter) => {

        return () => {
            if(counter <= available){
            alert(`se van a agregar ${counter} items a su carrito` );
            }
            else alert("Por favor quite items" );
        }
    }

    useEffect(() => {
        console.log("itemDetails montado");
        
    }, []);

    return <div className="item-detail-container">
        <div className="image">
            <img src={photo} alt={name}/>
        </div>
        <div className="item-detail-description">
            <h1>{name}</h1>
            <ItemCount onAdd={handleAdd} {...{available}} initial={1}></ItemCount>
        </div>
    </div>;

}



export default ItemDetails;

    

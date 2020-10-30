import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ onAdd, initial, available }) {
    const [items, setItems] = useState(initial);
    
    const handleClick = (op) => {
        return () => {
            if (op && items < available) {
                setItems(items+1);
            }
            else if (!op && items > 0){
                setItems(items-1);
            }
        }
    }

    
    
    return <div className="itemCount">
        <div className="upper">
            <button onClick={handleClick(false)} className="button">-</button>
            <p className="cantItems">{items}</p>
            <button onClick={handleClick(true)} className="button">+</button>
        </div>
        <div className="lower">
            
            <button onClick={onAdd(items)} className="button">Agregar</button>
        </div>
        
    </div>
}

export default ItemCount;
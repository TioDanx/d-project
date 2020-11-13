import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({ children, defaultCart }) {

    const [cart, setCart] = useState(defaultCart);

    function add( item, qnt ){
        setCart([...cart, item]);
    }

    function remove(itemID){

    }

    function clear(){

    }

    return <CartContext.Provider value={ cart, add, remove, clear }>
        { children }
    </CartContext.Provider>
} 
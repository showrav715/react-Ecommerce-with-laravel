import React, { createContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/CartReducer.jsx';
const CartContext = createContext();

let upcart;
if (localStorage.getItem('cartData') === null) { 
     upcart = [];
} else {
     upcart = JSON.parse(localStorage.getItem('cartData'))
}

const initialState = {
    cart: upcart,
}

const CartProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(reducer, initialState)


    // add to cart
    const addCart = (id,qty,color,product) => {
        dispatch({ type: 'ADD_CART', payload: {id,qty,color,product} })
    }

    const removeCartItem = (id) => {
        dispatch({type: 'REMOVE_CART_ITEM', payload: id})
    }

    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(state.cart))
    }, [state.cart])
    

    return (
        <CartContext.Provider value={{...state,addCart,removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider} 
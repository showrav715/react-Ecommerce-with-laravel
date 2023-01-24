import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import reducer from '../reducer/ProductReducer';

const ProductContext = React.createContext()

const initialState = {
    products: [],
    feature_products: [],
    loading: false,
    error: false,
    single_product:{}
}



const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let api = 'https://api.pujakaitem.com/api/products';
    useEffect(() => {
        getProducts();
    },[])


    const getProducts = async () => {
        dispatch({ type: 'SET_LOADING' })
       await axios.get(api).
            then((res) => { 
                dispatch({ type: 'SET_PRODUCTS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'SET_ERROR', payload: err.message })
            })
    }

    const getSingleProduct = async (id) => { 
        dispatch({ type: "SET_LOADING" })
        await axios.get(`${api}?id=${id}`)
            .then((res) => {
                dispatch({ type: 'SET_SINGLE_PRODUCT', payload: res.data })
            }).catch((erro) => {
                dispatch({ type: 'SET_ERROR', payload: erro.message })
            })
    }


    
    return (
         
            <ProductContext.Provider value={{...state,getSingleProduct}}>
                {children}
            </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}


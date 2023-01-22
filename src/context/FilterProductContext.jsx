import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";

const FilterProductContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "FILTER_PRODUCTS":
            return {
                ...state,
                filteredProducts: action.payload
            }
        default:
            return state;
    }
}

const initialState = {

    filteredProducts: [],
}


const FilterProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useContext(ProductContext);
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS", payload: products});
    }, [products])

    return (
        <FilterProductContext.Provider value={{...state}}>
            {children}
        </FilterProductContext.Provider>
    )
}


export {FilterProductContext, FilterProductProvider};
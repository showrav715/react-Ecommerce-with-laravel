
const ProdductReducer = (state, action) => { 

    switch (action.type) {
        case 'SET_PRODUCTS':
              const feature_products = action.payload.filter((product) => product.featured === true);  
            return {
                ...state,
                loading: false,
                products: action.payload,
                feature_products: feature_products
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        
        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        case 'SET_SINGLE_PRODUCT':
            return {
                ...state,
                loading: false,
                single_product: action.payload
            }
        default:
            return state;
    }
}


export default ProdductReducer;
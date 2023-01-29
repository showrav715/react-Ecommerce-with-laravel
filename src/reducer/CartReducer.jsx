
const reducer = (state,action) => {
    
    switch (action.type) {
        case 'ADD_CART':
            const { id, qty, color, product } = action.payload;
            let cartItem ={
                id: id + color,
                name: product.name,
                image: product.image[0].url,
                price: product.price,
                color: color,
                qty: qty,
                stock: product.stock,
                max: product.stock,
            }
            
            return {
                ...state,
                cart: [...state.cart ,cartItem]
            }
        
        
        case 'REMOVE_CART_ITEM': 
            return {
                ...state,
                cart: state.cart.filter((item)=>item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
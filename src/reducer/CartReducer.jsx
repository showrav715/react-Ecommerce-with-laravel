const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      const { id, qty, color, product } = action.payload;

      const exist_item = state.cart.find((item) => item.id == id + color);
      if (exist_item) {
        
        const updateCart = state.cart.map((currITEM) => {
          if (currITEM.id == id + color) {
            let newQty = currITEM.qty + qty;
            if (newQty > currITEM.stock) {
              newQty = currITEM.stock;
            }
            return {
              ...currITEM,
              qty:newQty
              }
          } else {
            return currITEM;
            }
        })


        return {
          ...state,
          cart:updateCart
        }
      }
          


      let cartItem = {
        id: id + color,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
        color: color,
        qty: qty,
        stock: product.stock,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartItem],
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

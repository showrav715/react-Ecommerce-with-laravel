const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "FILTER_STORE":
      return {
        ...state,
        sort: action.payload,
      };

    case "FILTER_PRODUCT":
      const { all_products } = state;
      const { search } = state.search;
      let tempsProducts = [...all_products];
      if (search) {
        tempsProducts = tempsProducts.filter((product) => {
          return product.name.toLowerCase().includes(search);
        });
      }
      return {
        ...state,
        filter_products: tempsProducts,
      };

    case "FILTER_UPDATE":
      const { name, value } = action.payload;
      return {
        ...state,
        search: {
          ...state.search,
          [name]: value,
        },
      };

    case "FILTER_BY_SORT":
      const { sort,filter_products } = state;
      let tempProducts = [...filter_products];
      
      switch (sort) {
        case "a-z":
          tempProducts = tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "z-a":
          tempProducts = tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        case "lowest":
          tempProducts = tempProducts.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "highest":
          tempProducts = tempProducts.sort((a, b) => {
            return b.price - a.price;
          });
          break;
      }



      return {
        ...state,
        filter_products: tempProducts,
      };

    default:
      return state;
  }
};

export default FilterReducer;

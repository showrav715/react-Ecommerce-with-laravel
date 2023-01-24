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

    case "FILTER_SEARCH_STORE":
      return {
        ...state,
        search: action.payload,
      };

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        filter_products: searchProducts,
      };

    case "FILTER_BY_SORT":
      const { sort } = state;
      const tempProducts = [...state.filter_products];
      switch (sort) {
        case "a-z":
          tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "z-a":
          tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        case "lowest":
          tempProducts.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "highest":
          tempProducts.sort((a, b) => {
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

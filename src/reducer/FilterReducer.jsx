const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      const priceAttr = action.payload.map((item) => item.price);
      const maxPrice = Math.max(...priceAttr);
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
        search: {
          ...state.search,
          ["max_price"]: maxPrice,
        },
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

      const { search, company, category, color } = state.search;
      let tempsProducts = [...all_products];
      if (search) {
        tempsProducts = tempsProducts.filter((product) => {
          return product.name.toLowerCase().includes(search);
        });
      }
      if (company && company !== "all") {
        tempsProducts = tempsProducts.filter((product) => {
          return product.company.toLowerCase().includes(company);
        });
      }
      if (category && category !== "all") {
        tempsProducts = tempsProducts.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      if (color != "all") {
        tempsProducts = tempsProducts.filter((product) => {
          return product.colors.includes(color);
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
      const { sort, filter_products } = state;

      let tempProducts = [...filter_products];
      let temp;
      switch (sort) {
        case "a-z":
          temp = tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "z-a":
          temp = tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        case "lowest":
          temp = tempProducts.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "highest":
          temp = tempProducts.sort((a, b) => {
            return b.price - a.price;
          });
          break;
      }

      return {
        ...state,
        filter_products: temp,
      };

    default:
      return state;
  }
};

export default FilterReducer;

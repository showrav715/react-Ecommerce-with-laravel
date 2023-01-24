import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterProductsContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: "lowest",
  search:''
};

const FilterProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useContext(ProductContext);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);


  const handleShorting = (e) => {
    const value = e.target.value;
    
    dispatch({ type: "FILTER_STORE",payload:value });
    dispatch({ type: "FILTER_BY_SORT" });
  }

  const handleSearch = (e) => {
    const value = e.target.value;

    dispatch({ type: "FILTER_SEARCH_STORE",payload:value });
    dispatch({ type: "FILTER_BY_SEARCH" });
  }

  return (
    <FilterProductsContext.Provider
      value={{ ...state, setGridView, setListView,handleShorting,handleSearch }}
    >
      {children}
    </FilterProductsContext.Provider>
  );
};

export { FilterProductsContext, FilterProductsProvider };

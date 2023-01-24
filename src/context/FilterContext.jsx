import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterProductsContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: "lowest",
  search: {
    search: "",
    category: "all",
    company: "all",
    color: "all",
  }
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
    dispatch({ type: "FILTER_PRODUCT" });
    dispatch({ type: "FILTER_BY_SORT" });
  }, [products, state.search,state.sort]);
  

  
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);


  const handleShorting = (e) => {
    const value = e.target.value;
    dispatch({ type: "FILTER_STORE",payload:value });
  }

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value
    dispatch({ type: "FILTER_UPDATE",payload:{name,value} });
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

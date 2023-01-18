import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterProductsContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
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

  return (
    <FilterProductsContext.Provider
      value={{ ...state, setGridView, setListView }}
    >
      {children}
    </FilterProductsContext.Provider>
  );
};

export { FilterProductsContext, FilterProductsProvider };

import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client'
import { ProductProvider } from "./context/ProductContext";
import { FilterProductsProvider } from "./context/FilterContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <FilterProductsProvider>
      <App />
    </FilterProductsProvider>
    </ProductProvider>
    </React.StrictMode>,
  )
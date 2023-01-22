import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client'
import { ProductProvider } from "./context/ProductContext";
import { FilterProductProvider } from "./context/FilterProductContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProductProvider>
      <App />
      </FilterProductProvider>
    </ProductProvider>
    </React.StrictMode>,
  )
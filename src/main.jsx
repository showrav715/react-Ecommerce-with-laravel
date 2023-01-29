import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client'
import { ProductProvider } from "./context/ProductContext";
import { FilterProductsProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
    </FilterProductsProvider>
    </ProductProvider>
    </React.StrictMode>,
  )
import React from "react";
import App from "./App";
import ReactDOM from 'react-dom/client'
import { ProductProvider } from "./context/ProductContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
    </React.StrictMode>,
  )
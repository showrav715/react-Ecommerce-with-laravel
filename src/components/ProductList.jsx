import React, { useContext } from 'react'
import { FilterProductsContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
export default function ProductList() {
  const { filter_products,grid_view } = useContext(FilterProductsContext);
  
  
    if(grid_view === true) { 
      return <GridView products={filter_products} />
    }
    if(grid_view === false) { 
      return <ListView products={filter_products}/>
    }
  
}

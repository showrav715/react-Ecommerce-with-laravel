import React, { useContext } from 'react'
import { FilterProductContext } from '../context/FilterProductContext';
import Grid from './Grid'
export default function ProductList() {


   const {filteredProducts} = useContext(FilterProductContext);
   console.log(filteredProducts);
   
  return (
    
      <Grid products={filteredProducts}  />
  
  )
}

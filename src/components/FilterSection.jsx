import React from 'react'
import { useContext } from 'react'
import { FilterProductsContext } from '../context/FilterContext'

export default function FilterSection() {
  const {handleSearch,search} = useContext(FilterProductsContext)
  return (
    <div>
      <input type="text" defaultValue={search} onChange={handleSearch} />
    </div>
  )
}

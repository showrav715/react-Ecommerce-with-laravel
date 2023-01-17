import React from 'react'
import NumberFormat from '../helpers/NumberFormat'
import { NavLink } from 'react-router-dom'
export default function Product({name,price,id,image,category}) {
  return (
      <>
      <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
          <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              <NumberFormat price={price} />
            </p>
          </div>
        </div>
      </div>
       </NavLink>
      </>
  )
}

import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function AddCartToggle({qty, increment, decrement}) {
  return (
    <div className="cart-button">
    <div className="amount-toggle">
      <button onClick={() => decrement()}>
        <FaMinus />
      </button>
      <div className="amount-style">{qty}</div>
      <button onClick={() => increment()}>
        <FaPlus />
      </button>
    </div>
  </div>
  )
}

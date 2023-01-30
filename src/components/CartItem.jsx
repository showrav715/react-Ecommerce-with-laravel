import React, { useContext } from 'react'
import { FaTrash } from 'react-icons/fa';
import AddCartToggle from './AddCartToggle.jsx'
import PriceFormat from '../helper/PriceFormat.jsx'
import { CartContext } from '../context/CartContext.jsx';
export default function CartItem({ id, name, qty, color, price, image, stock }) {
  const increment = ()=>{
    //qty+1 < stock ? setQuantiy(qty+1) : stock;
  }
  const decrement = ()=>{
   // qty > 1 && setQuantiy(qty-1);
  }
  const { removeCartItem } = useContext(CartContext);

    return (
        <div className="cart_heading grid grid-five-column">
          <div className="cart-image--name">
            <div>
              <figure>
                <img src={image} />
              </figure>
            </div>
            <div>
              <p>{name}</p>
              <div className="color-div">
              <p>color:</p>
                <div
                className="color-style"
                style={{ backgroundColor: color,color:color }}
                  ></div>
              </div>
            </div>
          </div>
          {/* price   */}
          <div className="cart-hide">
            <p>
              <PriceFormat price={price} />
            </p>
          </div>
    
          {/* Quantity  */}
          <AddCartToggle qty={qty} increment={increment} decrement={decrement} />
    
          {/* //Subtotal */}
          <div className="cart-hide">
            <p>
              <PriceFormat price={price*qty} />
            </p>
          </div>
    
          <div>
            <FaTrash onClick={()=>removeCartItem(id)} className="remove_icon" />
          </div>
        </div>
      );
    };


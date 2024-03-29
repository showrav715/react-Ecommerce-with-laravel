import { useState,useContext } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import AddCartToggle from "./AddCartToggle";
import { CartContext } from "../context/CartContext";



const AddtoCart = ({ product }) => {

  const {addCart} = useContext(CartContext);



   const { id, colors, stock } = product;
    const [main, setMain] = useState(colors[0]);
    const [qty, setQuantiy] = useState(1);
    const increment = ()=>{
      qty+1 < stock ? setQuantiy(qty+1) : stock;
    }
    const decrement = ()=>{
      qty > 1 && setQuantiy(qty-1);
    }
   
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={curColor == main ? "btnStyle active" : "btnStyle"}
                onClick={() => setMain(curColor)}
              >
                {main == curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <AddCartToggle qty={qty} increment={increment} decrement={decrement} />
      
      <NavLink to={`/cart`}>
        <br />
        <Button onClick={ () =>  addCart(id,qty,main,product)} className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddtoCart;

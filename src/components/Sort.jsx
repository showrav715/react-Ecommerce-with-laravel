import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FilterProductsContext } from "../context/FilterContext";
export default function Sort() {
  const { grid_view, setGridView, setListView,filter_products,handleShorting } = useContext(
    FilterProductsContext
  );



  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          onClick={() =>setGridView()}
          className={`sort-btn ${grid_view == true ? "active" : ""}`}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          onClick={() => setListView()}
          className={`sort-btn ${grid_view == false ? "active" : ""}`}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{filter_products.length} products found</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" onChange={(e)=>{handleShorting(e)}} id="sort" className="sort-selection--style">
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

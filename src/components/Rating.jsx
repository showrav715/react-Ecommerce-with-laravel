import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export default function Rating({ starts, reviews }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span className="icon" key={index}>
        {starts >> 0 >= index + 1 ? (
          <FaStar />
        ) : starts >> number ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">
        {tempStars}
        <p>({reviews} number people)</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

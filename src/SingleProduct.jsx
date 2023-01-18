import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NumberFormat from "./helpers/NumberFormat";
import { ProductContext } from "./context/ProductContext";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Gallery from "./components/Gallery";
import BackNavigation from "./components/BackNavigation";
import Rating from "./components/Rating";
import Colors from "./components/Colors";
const SingleProduct = () => {
  const id = useParams().id;

  const { single_product, getSingleProduct, loading } = useContext(ProductContext);
  const { name, price, category, image, description, company, stock,stars,reviews,colors } = single_product;

  useEffect(() => {
    getSingleProduct(id);
  }, [])


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <BackNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <Gallery images={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>

            <Rating starts={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
              <NumberFormat price={price+2500} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <NumberFormat price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</span>
              </p>
              <p>
                Category : <span> {category} </span>
              </p>
              <p>
                Brand :<span>{company} </span>
              </p>
            </div>
            <hr />
            {single_product.colors  && <Colors product={single_product} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

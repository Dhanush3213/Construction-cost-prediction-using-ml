import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/Myimage";
import { Container } from "../src/components/styles/Container";
// import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { useAppContext } from "./context/AppContext";

import { ImLocation } from 'react-icons/im';
import { BsArrowsMove } from 'react-icons/bs';
import { AiFillTags } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';


const SingleProject = () => {
  const { houseData } = useAppContext();

  const { id } = useParams();

  const singleproject = houseData.filter((curElem, i) => {
    return curElem.id === id
  })

  const {
    id: alias,
    title,
    sourceUrl,
  } = singleproject[0];

  // console.log(singleproject);

  const {
    price,
    clientname,
    location,
    packagename,
    totalarea,
    floors
  } = singleproject[0]?.ProjectFields;

  const {
    pic1, pic2, pic3, pic4, pic5
  } = singleproject[0]?.ProjectGallery;



  return (
    <Wrapper>
      {/* <PageNavigation title={name} /> */}
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product images  */}
          <div className="product_images">
            <MyImage imgs={sourceUrl} map={singleproject[0]?.ProjectGallery} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2>{title}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <p className="product-data-price product-data-real-price">
              Price: {price} lakhs
            </p>
            <p className="product-data-price product-data-real-price">
              {/* Deal of the Day: <FormatPrice price={price} /> */}
            </p>
            {/* <p>{description}</p> */}
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <ImLocation className="warranty-icon" />
                <p>{location}</p>
              </div>

              <div className="product-warranty-data">
                <BsArrowsMove className="warranty-icon" />
                <p>{totalarea}</p>
              </div>

              <div className="product-warranty-data">
                <FiLayers className="warranty-icon" />
                <p>{floors}</p>
              </div>

              <div className="product-warranty-data">
                <AiFillTags className="warranty-icon" />
                <p>{packagename}</p>
              </div>

            </div>


            {/* <div className="product-data-info">
                            <p>
                                Available:
                                <span style={{ color: stock > 0 ? "green" : "red" }}> {stock > 0 ? "In Stock" : "Not Available"}</span>
                            </p>
                            <p>
                ID : <span> {id} </span>
              </p>
        <p>
                                Brand :<span> {company} </span>
                            </p>
                        </div> */}
            <hr />
            <br />
            {/* <iframe width="400rem" height="300rem" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100&amp;hl=en&amp;q="+ {{location}} + "+(My%20Business%20Name)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embe"><a href="https://www.gps.ie/wearable-gps/" >adventure gps</a></iframe> */}

            {/* {
                            stock > 0 ? <AddToCart singleproduct={singleproduct} /> : <p className="outOfStock">Out Of Stock</p>
                        } */}
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
      /* border-bottom: 1px solid #ccc; */
      /* margin-bottom: 1rem; */

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

    .outOfStock{
             margin: 0 auto;
            color: red;
            font-size: 3rem;
    }
    .product-data-price {
      font-weight: bold;
      font-size:2rem !important ;
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
      width: 100%;
      /* height: 0.2rem; */
      border: 0.1rem solid #001;
      color: blue;
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

export default SingleProject;
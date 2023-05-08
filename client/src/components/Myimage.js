import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs, map }) => {
  const [mainImage, setMainImage] = useState(imgs);

  console.log("pics " + map);
  let result = []

  result = Object.keys(map).map((key) => map[key])
  result = result.slice(0, 4);

  // [pic1, pic2, pi3].map((c) => { return })
  // console.log(result);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {result.map((curElm, index) => {
          {/* console.log(map?.curElm); */ }
          return (
            <figure key={index}>
              <img
                src={curElm.sourceUrl}
                alt={curElm.altText}
                className="box-image--style"
                key={curElm.id}
                onClick={() => setMainImage(curElm.sourceUrl)}
              />
            </figure>
          );
        })}
      </div>

      {/* 2nd column  */}
      <div className="main-screen">
        <img src={mainImage} alt="hi" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 1rem;

  .grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      height: 15rem;
      max-height: 100%;
      background-size: cover;
      object-fit: cover;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
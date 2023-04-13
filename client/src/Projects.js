import React from "react";
import styled from "styled-components";
import ProjectList from "./components/ProjectList"
// import Sort from "./components/Sort";
// import Filter from "./components/Filter";
import { HouseData } from "./Constants";



const Projects = () => {
  return <Wrapper>
    <div className="container grid grid-filter-column">
      {/* <div className="fiter-section">
                <Filter />
            </div> */}

      <section className="Product-view-sort">
        {/* <div>
                    <Sort />
                </div> */}
        <div className="main-product ">
          <ProjectList HouseData={HouseData} />
        </div>
      </section>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
   background-color: #F2F5F7;

  /* .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  } */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;

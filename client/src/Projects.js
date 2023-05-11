import React from "react";
import styled from "styled-components";
import ProjectList from "./components/ProjectList"
import { HouseData } from "./Constants";



const Projects = () => {
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <section className="Product-view-sort">
        <div className="main-product ">
          <ProjectList HouseData={HouseData} />
        </div>
      </section>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
   background-color: #F2F5F7;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;

// import React from 'react'

// const Projects = () => {
//     return (
//         <div>
//             <h1>Api Call For Projects</h1>
//         </div>
//     )
// }

// export default Projects



import React from "react";
import styled from "styled-components";
import ProjectList from "./components/ProjectList"
// import Sort from "./components/Sort";
// import Filter from "./components/Filter";

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
                <div className="main-product">
                    <ProjectList />
                </div>
            </section>
        </div>

    </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;

import React from 'react'
import styled from 'styled-components';
// import { useFilterContext } from '../../context/filterContext';
import Project from "./Project"
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"
import img5 from "../Images/img5.jfif"
import img6 from "../Images/img6.jfif"

const ProjectList = () => {



    const Wrapper = styled.section`
   padding: 9rem 0;
   background-color: #fff;
   /* padding: 2rem 1rem; */
   /* background-color: ${({ theme }) => theme.colors.bg}; */
   .grid{
        gap: 6rem;
   }


   figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    /* background-color: #fff; */
   background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    width: 250px;
    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
 `
    return (
        <Wrapper>
            <div className='grid grid-four-column'>
                <Project img={img1} />
                <Project img={img2} />
                <Project img={img4} />
                <Project img={img5} />
                <Project img={img5} />
                <Project img={img6} />
                <Project img={img3} />
                <Project img={img2} />
                <Project img={img1} />

            </div>
        </Wrapper>
    )
}

export default ProjectList
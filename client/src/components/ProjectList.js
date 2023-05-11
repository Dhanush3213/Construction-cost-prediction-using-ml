import React from 'react'
import styled from 'styled-components';
import Project from "./Project"

const ProjectList = ({ HouseData }) => {


  const Wrapper = styled.section`
   padding: 9rem 0;
   .grid{
        gap: 10rem;  
   }

   figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: .3s ease-in-out;
   
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 22rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 10%;
      right: 3%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.7rem 1.4rem;
      font-size: .8rem;
      border-radius: 2rem;
    }
  }

  .card {
    border-radius: 1rem;
    width: 350px;
    margin-bottom: 15rem;
    position: relative;
    
   &:hover{
          .card-data{
            background-color:#60B8C6 ;
            color: white;
            p,h3,h4{
             color: white;
                } 
           }
   }

    .card-data {
      padding: 0 2rem;
      position: absolute;
      width: 32rem;
      height: 21rem;
      top: 19rem;
      left: 6rem;
      box-shadow: -1px 0 5px #888;
      background-color: #fff;
    }
    .card-data-title{
           margin-top: 2rem;
           font-size: 1.3rem ;
           color: #303134;
           font-weight: 700;
          }
     .card-data-details-flex {
      margin: 2.3rem 0 2rem 0;
      display: flex;
      justify-content: space-between;
    }
    
    .card-data-details-flex  p{
      font-family: 'Lato', sans-serif;
      color: #303134;
      font-size: 1.1rem;
      font-weight: 400 ;
      letter-spacing: .6px;
      margin-bottom: 4px;
    }
    .card-data-details-flex h4{
      font-family: 'Lato', sans-serif;
      color: #303134;
      font-size: 1.2rem;
      font-weight: 700 ;
      letter-spacing: .6px;
      margin: 0;
    }

    .c.card-data-details-flex .inside{
      display: flex;
      justify-content: space-between;
    }


    .left{
      display: flex !important;
      gap: 1.5rem !important;
    }
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
    }
    .layers{
      padding-right: 2.5rem;
    }
    .Know_more{
      width: 100%;
     display: flex;
     justify-content: end;
     padding-right: 11rem;
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
      <div className='grid grid-three-column'>
        {
          HouseData.map((Home) => <Project Home={Home} key={Home.id} />)
        }

      </div>
    </Wrapper>
  )
}

export default ProjectList
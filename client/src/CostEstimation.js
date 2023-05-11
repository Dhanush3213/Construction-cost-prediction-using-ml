import React from 'react';
import { useAppContext } from './context/AppContext';
import styled from 'styled-components';
import Project from './components/Project';
import ChatBot from "./ChatBot";

const Wrapper = styled.section`

    body{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        color: #121212; 
        background: #f1f5f9;
      }      
           
/* a,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
} */

img {
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
}
.grid{
        gap: 6rem;  
   }
.container-cost {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100rem;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
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


.text {
    font-family: inherit;
    line-height: inherit;
    text-transform: unset;
    text-rendering: optimizeLegibility;
}

.text-large {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2.1rem;
    color: #121212;
}

.text-normal {
    font-size: 1.5rem;
    font-weight: 400;
    color: #121212;
    margin-bottom: 1.8rem;
}

.text-links {
    font-size: 1.4rem;
    font-weight: 400;
    color: #1a73e8;
}


.text-links:hover {
    text-decoration: underline;
}

.main .wrapper {
    max-width: 57rem;
    width: 100%;
    margin: 2rem auto;
    padding: 2.2rem 2.8rem;

    border: none;
    outline: none;
    border-radius: 0.25rem;
    color: #121212;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);

.form {
    width: 100%;
    height: auto;
    /* margin-top: 2rem; */
     
    .input-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      }

     .input-field {
        font-family: inherit;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: inherit;
        width: 100%;
        height: auto;
        padding: 0.75rem 1.25rem;
        border: none;
        outline: none;
        border-radius: 2rem;
        color: #121212;
        background: #f1f5f9;
        text-transform: unset;
        text-rendering: optimizeLegibility;
        }

      .input-submit {
        font-family: inherit;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: inherit;
        cursor: pointer;
        min-width: 40%;
        height: auto;
        padding: 0.65rem 1.25rem;
        margin-top: 1.2rem;
        border: none;
        outline: none;
        border-radius: 2rem;
        color: #ffffff;
        background: #1a73e8;
        box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        text-transform: capitalize;
        text-rendering: optimizeLegibility;
}
}

    .striped {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
      }

    .striped-line {
        flex: auto;
        flex-basis: auto;
        border: none;
        outline: none;
        height: 2px;
        background: #dadce0;
     }

    .striped-text {
        font-family: inherit;
        font-size: 1rem;
        font-weight: 500;
        line-height: inherit;
        color: #121212;
        margin: 0 1rem;
     }
   
}

.center{
    width: 100%;
   display:flex;
   justify-content:center;
   align-items:center;
}

.pridicated_price_Wrapper p{
   font-size: 1.8rem;
   font-family: inherit;
        /* font-size: 1.4rem; */
        font-weight: 500;
}

.cost-button{
    display:flex !important;
    justify-content: end !important;
    align-items: center !important;
}
.map{
    display: block;
    width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
}
.section_project_samples{
   display: flex;
   justify-content: center;
   align-items: center;
   margin:10rem 0rem 5rem 0rem;
  }
.none{
  display: none !important;
}


@media screen and (max-width: 1280px) {
    .main .wrapper {
        max-width: 38rem;
        padding: 2rem 2.5rem;
    }
}  

`
const CostEstimation = () => {
  const { pri_price, price_Based_projects } = useAppContext();

  return (
    <>
      <Wrapper>
        <main className="main">

          <div className="container-cost">
            <ChatBot />
          </div>

          <div className={pri_price ? 'flex' : 'flex none'}>
            <iframe width="1000rem" height="500rem" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1000%25&amp;height=1000&amp;hl=en&amp;q={{banglore}}+(My%20Business%20Name)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/" >adventure gps</a></iframe>
          </div>

        </main>

        <div className={pri_price ? 'grid grid-three-column section_project_samples' : 'grid grid-three-column section_project_samples none'} >
          {
            price_Based_projects.map((Home) => <Project Home={Home} key={Home.id} />)
          }
        </div>
      </Wrapper>
    </>
  )
}


export default CostEstimation







import React, { useState } from 'react';
import { useAppContext } from './context/AppContext';
import styled from 'styled-components';
import Project from './components/Project';
import ChatBot from './ChatBot';
const Wrapper = styled.section`

    body{
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        color: #121212; 
        background: #f1f5f9;
      }      
           
a,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
}

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
    /* min-height: 85vh; */
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
}
  

   figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    /* transition: all 3s linear; */
    transition: .3s ease-in-out;
    /* &::after {
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
    } */
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
    /* background-color: #fff; */
   /* background-color: ${({ theme }) => theme.colors.bg}; */
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

@media screen and (max-width: 1280px) {
    .main .wrapper {
        max-width: 38rem;
        padding: 2rem 2.5rem;
    }
}  

`

const CostEstimation = () => {
  const { pri_price, dispatch, price_Based_projects } = useAppContext();

  const [location, setLocation] = useState("");
  const [sqft, setSqft] = useState();
  const [bathroom, setBathroom] = useState();
  const [bhk, setBhk] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    let sqftint = parseInt(sqft);
    let bathroomInt = parseInt(bathroom);
    let bhkInt = parseInt(bhk);

    const res = await fetch('http://127.0.0.1:8000/api/predict/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: location,
        sqft: sqftint,
        bhk: bathroomInt,
        bath: bhkInt,
      })
    });

    const data = await res.json();
    setLocation(data.location)

    console.log(data.prediction)
    if (res.status === 400 || !data) {
      window.alert("Please Wait or try again");
    } else {
      dispatch({ type: "PRE_PRICE", payload: data.prediction });
      dispatch({ type: "Price_Projects" });
    }
  };

  return (
    <>
      <Wrapper>
        <main className="main">

          <div className="container-cost">
            <ChatBot />


          </div>
          {/* <div className='flex'>
            <iframe width="1000rem" height="600rem" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1000%25&amp;height=1000&amp;hl=en&amp;q={{rajaji nagar}}+(My%20Business%20Name)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/" >adventure gps</a></iframe>
          </div> */}
        </main>

        <div className='grid grid-three-column'>
          {
            price_Based_projects.map((Home) => <Project Home={Home} key={Home.id} />)
          }
        </div>
      </Wrapper>
    </>
  )
}


export default CostEstimation




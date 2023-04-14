import React, { useState } from 'react';
// import ChatBox from './components/ChatBox';
import { useAppContext } from './context/AppContext';
import styled from 'styled-components';


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

.container-cost {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100rem;
    min-height: 85vh;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
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


@media screen and (max-width: 1280px) {
    .main .wrapper {
        max-width: 38rem;
        padding: 2rem 2.5rem;
    }
}  

`


const CostEstimation = () => {
    const { pri_price, dispatch } = useAppContext();


    const [location, setLocation] = useState("");
    const [sqft, setSqft] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [bhk, setBhk] = useState("");
    const [prediction,setPrediction] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        const res = await fetch('http://127.0.0.1:8000/api/predict/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location: location,
                sqft: sqft,
                bath: bathroom,
                bhk: bhk,
            })
        });

        const data = await res.json();
        setPrediction(data.prediction);
        setLocation(data.location)
        let url=
    console.log(data.prediction)
        if (res.status === 400 || !data) {
            window.alert("Please Wait or try again");
        } else {
            dispatch({ type: "PRE_PRICE", payload: res.prediction });
        }
    };

    return (
        <>
        <Wrapper>

            <main className="main">
                <div className="container-cost">
                    <section className="wrapper">
                        <div className="heading">
                            <h1 className="text text-large">Price Prediction</h1>
                        </div>
                        {/* <ChatBox /> */}
                        <form className='form'>
                            <div className='input-control'>
                                <label htmlFor="Location" className="input-label" hidden >Location :</label>
                                <input type="text" name="location" className="input-field" value={location} placeholder="Enter location " onChange={e => setLocation(e.target.value)} />
                            </div>
                            <div className='input-control'>
                                <label htmlFor="Location" className="input-label" hidden >Location :</label>
                                <input type="number" value={sqft} onChange={e => setSqft(e.target.value)} name="location" className="input-field" placeholder="Enter Squarefeet " />
                            </div>
                            <div className='input-control'>
                                <label htmlFor="Location" className="input-label" hidden >Location :</label>
                                <input type="number" value={bhk} onChange={e => setBhk(e.target.value)} name="bhk" className="input-field" placeholder="Enter BHK " />
                            </div>
                            <div className='input-control'>
                                <label htmlFor="Location" className="input-label" hidden >Location :</label>
                                <input type="number" placeholder="No of bathrooms  " value={bathroom} onChange={e => setBathroom(e.target.value)} name="bathroom" className="input-field" />
                            </div>

                            <div className="input-control cost-button">
                                <input type="submit" name="submit" onClick={handleSubmit} className="input-submit" value="Estimate Price" />
                            </div>
                        </form>

                        <div className='pridicated_price_Wrapper center'>
                            <p>Predicted Price: {prediction} Lacks</p>
                        </div>
                    </section>
                    <iframe width="200em" height="200em" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q={{location}}+(My%20Business%20Name)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/" >adventure gps</a></iframe>
                </div>

            </main>
            
        </Wrapper>
       
        </>
    )
}


export default CostEstimation
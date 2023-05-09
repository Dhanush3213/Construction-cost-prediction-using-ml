import React, { useState } from 'react'
import styled from 'styled-components';
import { IoMdSend } from 'react-icons/io';
import { useAppContext } from './context/AppContext';

const ChatBot = () => {
    const { dispatch, location, sqareFeet, bedRooms, bathRooms, pri_price } = useAppContext();

    const [inputValue, setInputValue] = useState("")


    const handleSubmit = async e => {
        e.preventDefault();
        let sqftint = parseInt(sqareFeet);
        let bhkInt = parseInt(bedRooms);
        let bathroomInt = parseInt(bathRooms);

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
        // setLocation(data.location)

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
                <div className='chat_bot'>
                    <div className='top'>
                        <img src="/images/home.png" alt='chat-logo' />
                        <h2>Price Prediction</h2>
                    </div>
                    <hr />

                    <div className='new_design'>

                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter Your Location ?</p>
                        </div>

                        <div className="right">
                            <form className='form mr-tb-1 right_chat flex'>
                                <div className='input-control mr-r-1'>
                                    <label htmlFor="Location" className="input-label" hidden>Location :</label>
                                    <input type="text" name="location" className="input-field" value={location || inputValue} placeholder="Enter location " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "UPDATE_LOCATION", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={location ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter SquareFeet ?</p>
                        </div>
                        <div className="right" >
                            <form className={location ? 'form flex right_chat' : 'form none'}>
                                <div className='input-control mr-r-1'  >
                                    <label htmlFor="Location" className="input-label" hidden> :</label>
                                    <input type="text" name="location" className="input-field" value={sqareFeet || inputValue} placeholder="Enter Sqfeet " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>

                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "UPDATE_SQUAREFEET", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={sqareFeet ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter BedRoom ?</p>
                        </div>
                        <div className="right" >

                            <form className={sqareFeet ? 'form flex right_chat ' : 'form none'}>
                                <div className='input-control mr-r-1' >
                                    <label htmlFor="Location" className="input-label" hidden>Location :</label>
                                    <input type="text" name="location" className="input-field" value={bedRooms || inputValue} placeholder="Enter Bhk " onChange={e => {
                                        setInputValue(e.target.value)

                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "UPDATE_BEDROOMS", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={bedRooms ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter Your BathRooms ?</p>
                        </div>
                        <div className="right" >
                            <form className={bedRooms ? 'form flex  right_chat' : 'form none'}>
                                <div className='input-control mr-r-1'>
                                    <label htmlFor="Location" className="input-label" hidden>Location :</label>
                                    <input type="text" name="location" className="input-field" value={bathRooms || inputValue} placeholder="Enter Bathroom " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "UPDATE_BATHROOMS", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>


                            </form>

                        </div>
                        <div className={bathRooms ? 'input-control cost-button' : 'input-control cost-button none'}>
                            <input type="submit" name="submit" onClick={handleSubmit} className={bathRooms ? 'input-submit cost-input-button' : 'input-submit cost-input-button none'} value="Estimate Price" />
                        </div>
                        <div className={bathRooms ? 'pridicated_price_Wrapper center' : 'pridicated_price_Wrapper center none'}>
                            <p>Predicted Price: {pri_price} Lacks</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: center;
padding: 8rem 0 5rem 0;
text-align: center;


.chat_bot{
    width: 45rem;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.75);
    height: auto;
    padding: 1.5rem 2rem 3rem 2rem;

    hr{
        height: 0.3rem;
        background-color: black;
        width: 100%;
    }
}


.left {
    display: flex;
    margin-top: 2.7rem;

}

.left img{
    width: 5.5rem;
    height: 5.5rem;
    margin-right: .5rem;
}
.left p{
    font-size: 1.4rem;
    line-height: 5.4rem;
    background-color: #dfedf3;
    border-radius: 2rem;
    padding: 0rem 1.5rem;
    box-shadow: 1px 4px 4px 0px rgba(0,0,0,0.75);
/* -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75); */
/* -moz-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.75); */

}

.right{
    display: flex;
    justify-content: right;
    /* justify-content: left; */
margin-top: 2rem;
}

.right_chat{
background-color: #f1f5f9;
border-radius: 1.5rem;
box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);


}
.input-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* margin-bottom: 2rem; */
      }

     .input-field {

        font-family: inherit;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: inherit;
        width: 100%;
        height: auto;
        padding: 1rem 1.55rem;
        border: none;
        outline: none;
        box-shadow: none;
        border-radius: 2rem;
        color: #121212;
        /* background: #f1f5f9; */
        background: none;
        background-color: none;
        text-transform: unset;
        text-rendering: optimizeLegibility;
        }

      .input-submit {
        font-family: inherit;
        font-size:2rem;
        font-weight: 500;
        /* line-height: inherit; */
        cursor: pointer;
        min-width: 20%;
        height: auto;
        padding: .55rem 1.5rem;
        border: none;
        outline: none;
        border-radius: 2rem;
        color: black;
        background-color: none;
        background: none;
     
        text-transform: capitalize;
        text-rendering: optimizeLegibility;
}

.mr-r-1{
    margin-right:1rem ;
}
.top{
    display: flex;
    justify-content: center;
    margin: 1.8rem 0rem 1.5rem 0rem;
}


.top h2{
   line-height: 6rem;
   margin-left: 1rem;
   font-size: 3.5rem;
}
.top img{
    width: 6rem;
    height: 6rem;
}

.pridicated_price_Wrapper p{
    margin-top: 2rem;
   font-size: 1.8rem;
   font-family: inherit;
        font-weight: 500;
}

.cost-button{
    display:flex ;
    justify-content: center ;
    align-items: center ;
}
.cost-input-button{
color: white;
    background-color: #1a73e8;
}
.none{
    display: none !important;
}
    `


export default ChatBot
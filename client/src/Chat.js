import React, { useState } from 'react'
import { useAppContext } from './context/AppContext';
import styled from 'styled-components';
import { IoMdSend } from 'react-icons/io';

const Chat = () => {
    const { dispatch, locationone, sqftone, bedone, bathone } = useAppContext();

    // const [loc, setloc] = useState(false);
    // const [sq, setSq] = useState(false);
    // const [bh, setBh] = useState(false);
    // const [bath, setbath] = useState(false);
    const [inputValue, setInputValue] = useState("")

    // const [location, setLocation] = useState("");
    // const [sqft, setSqft] = useState();
    // const [bathroom, setBathroom] = useState();
    // const [bhk, setBhk] = useState();



    return (
        <>

            <Wrapper>
                <div className='chat_bot'>
                    <div className='top'>
                        <img src="/images/chatImg.png" alt='chat-logo' />
                        <h2>Chat BOT</h2>
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
                                    <input type="text" name="location" className="input-field" value={locationone || inputValue} placeholder="Enter location " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "location", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={locationone ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter SquareFeet ?</p>
                        </div>
                        <div className="right" >
                            <form className={locationone ? 'form flex right_chat' : 'form none'}>
                                <div className='input-control mr-r-1'  >
                                    <label htmlFor="Location" className="input-label" hidden> :</label>
                                    <input type="text" name="location" className="input-field" value={sqftone || inputValue} placeholder="Enter Sqfeet " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>

                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "sqfeet", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={sqftone ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter BedRoom ?</p>
                        </div>
                        <div className="right" >

                            <form className={sqftone ? 'form flex right_chat ' : 'form none'}>
                                <div className='input-control mr-r-1' >
                                    <label htmlFor="Location" className="input-label" hidden>Location :</label>
                                    <input type="text" name="location" className="input-field" value={bedone || inputValue} placeholder="Enter Bhk " onChange={e => {
                                        setInputValue(e.target.value)

                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "bedroom", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>

                    <div className={bedone ? 'new_design ' : 'new_design none'} >
                        <div className="left" >
                            <img src='/images/chatImg.png' alt='msg-logo' />
                            <p>Enter Your BathRooms ?</p>
                        </div>
                        <div className="right" >
                            <form className={bedone ? 'form flex  right_chat' : 'form none'}>
                                <div className='input-control mr-r-1'>
                                    <label htmlFor="Location" className="input-label" hidden>Location :</label>
                                    <input type="text" name="location" className="input-field" value={bathone || inputValue} placeholder="Enter Bathroom " onChange={e => {
                                        setInputValue(e.target.value)
                                    }} />
                                </div>
                                <button className='input-submit ' onClick={(e) => {
                                    e.preventDefault();
                                    dispatch({ type: "bath", payload: inputValue })
                                    setInputValue("");
                                }}><IoMdSend /></button>
                            </form>
                        </div>
                    </div>


                    {/* <form className='form mr-tb-1 flex'>
                        <div className='input-control mr-r-1'>
                            <label htmlFor="Location" className="input-label" hidden>Location :</label>
                            <input type="text" name="location" className="input-field" value={locationone || inputValue} placeholder="Enter location " onChange={e => {
                                setInputValue(e.target.value)
                            }} />
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            dispatch({ type: "location", payload: inputValue })
                            setInputValue("");
                        }}>send</button>
                    </form> */}




                </div>


            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
/* align-items: center; */
justify-content: center;
padding: 9rem 0 5rem 0;
text-align: center;

.chat_bot{
    width: 40rem;
    box-shadow: 10px 15px 10px 0px rgba(0,0,0,0.75);
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
    margin-top: 3rem;

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
        /* background: #1a73e8; */
     
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
   margin-left: 2rem;
}
.top img{
    width: 6rem;
    height: 6rem;
}
`


export default Chat
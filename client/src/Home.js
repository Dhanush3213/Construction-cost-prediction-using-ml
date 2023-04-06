import React from 'react'
import Heading from "./Heading"
import "./Home.css"
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const Home = () => {
    const steps = [

        {
    
          id: "Greet",
    
          message: "Hello, Welcome to our Website",
    
          trigger: "Done",
    
        },
    
        {
    
          id: "Done",
    
          message: "Please enter your name!",
    
          trigger: "waiting1",
    
        },
    
        {
    
          id: "waiting1",
    
          user: true,
    
          trigger: "Name",
    
        },
    
        {
    
          id: "Name",
    
          message: "Hi {previousValue}, Please select your issue",
    
          trigger: "issues",
    
        },
    
        {
    
          id: "issues",
    
          options: [
    
            {
    
              value: "React",
    
              label: "React",
    
              trigger: "React",
    
            },
    
            { value: "Angular", label: "Angular", trigger: "Angular" },
    
          ],
    
        },
    
        {
    
          id: "React",
    
          message:
    
            "Thanks for letting your React issue, Our team will resolve your issue ASAP",
    
          end: true,
    
        },
    
        {
    
          id: "Angular",
    
          message:
    
            "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
    
          end: true,
    
        },
    
      ]; 
    return (
        <>

   
            <section className='hero'>
                <div className='container'>
                    <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

                    <form className='flex formHero'>
                        <div className='box'>
                            <span>City/Street</span>
                            <input type='text' placeholder='Location' />
                        </div>
                        <div className='box'>
                            <span>Property Type</span>
                            <input type='text' placeholder='Property Type' />
                        </div>
                        <div className='box'>
                            <span>Price Range</span>
                            <input type='text' placeholder='Price Range' />
                        </div>
                        <div className='box'>
                            <h4>Advance Filter</h4>
                        </div>
                        <button className='btn1'>
                            <i className='fa fa-search'></i>
                        </button>
                    </form>

                </div>
            </section>
            <Segment floated="right">
        <ChatBot steps={steps} />
        </Segment>
        </>

    )
}

export default Home


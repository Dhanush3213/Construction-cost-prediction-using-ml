import React from 'react'
import Heading from "./Heading"
import "./Home.css"
import KommunicateChat from "./components/Chat"

const Home = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
        </div>
        <KommunicateChat />
      </section>
    </>
  )
}

export default Home


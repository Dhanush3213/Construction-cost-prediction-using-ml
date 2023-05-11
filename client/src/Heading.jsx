import React from "react"

const Heading = ({ title, subtitle }) => {
  const styleObj = {
    textAlign: "center",
  }
  return (
    <>
      <div className='heading' style={styleObj} >
        <h1 >{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading

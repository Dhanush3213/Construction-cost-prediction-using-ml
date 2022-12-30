import React from "react"


const Heading = ({ title, subtitle }) => {
  const styleObj = {
    // fontSize: 14,
    // color: "#4a54f1",
    textAlign: "center",
    // paddingTop: "100px",
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

import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
    const myName = "Ola"

    const myStyle = {
        color: "white",
        fontSize: "5rem",
        fontWeight: "100",
        textAlign: "center"
    }
  return (
    <>
       <div className={style.heading}>
         <h1 style={myStyle}>Footer</h1>
        <h1>{myName}</h1>
       </div>
    </>
  )
}

export default Footer

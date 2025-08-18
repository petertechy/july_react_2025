import React, { useRef } from 'react'

const Reference = () => {
    let myRef = useRef()

    
    const handleChange = () =>{
        console.log(myRef.current.innerText)

        myRef.current.innerText = "Welcome to SQI"
        myRef.current.style.color = "green"
    }
  return (
    <div>
        <h1 ref={myRef}>Hello World</h1>
        <button onClick={handleChange}>Change Value</button>


    </div>
  )
}

export default Reference
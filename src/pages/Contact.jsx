import React, { useState } from 'react'

const Contact = () => {
  const [number, setnumber] = useState(8)
  const myName = "Kenny"
  let myNumber = 9
  const addNumber = ()=>{
    // myNumber += 1
    // myNumber = myNumber + 1
    // myNumber++
    // console.log(myNumber)
    setnumber(number + 1)
    console.log(number)
  }
  return (
    <>
      <div className='border col-7 mx-auto p-3 my-4 text-center'>
        <h1>{myName}</h1>
        <h1>{number}</h1>
        <button onClick={addNumber} className='btn btn-lg btn-danger'>Increase Number</button>
      </div>
       
       
        
    </>
  )
}

export default Contact
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [number, setnumber] = useState(7);
  const [inputValue, setinputValue] = useState("")

  
  

  const handleIncrease = () => {
    setnumber(number+1)
    console.log(number)
  };

  const handleChange = (e) =>{
    setinputValue(e.target.value)
  }

  useEffect(()=>{
    console.log("Mounted")

    return ()=>{
        console.log("Unmounted")
    }
  }, [])
  return (
    <>
      <div className="mx-auto border col-7 text-center my-3 p-3">
        <h1>FetchData is {number}</h1>
      <button
        className="btn btn-warning btn-lg"
        onClick={() => handleIncrease()}
        >
        Increase Number
      </button>
        <input placeholder="type something.." onChange={handleChange} type="text" value={inputValue} className="form-control my-3"/>
        <h1>{inputValue}</h1>
          </div>
    </>
  );
};

export default FetchData;

import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const handleSubmit = () =>{
    let endpoint = "http://localhost:5000/register"
    let userObject = {firstname, lastname, email, password}
    console.log(userObject)
    axios.post(endpoint,userObject)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <>
      <div className="mx-auto col-7 rounded border p-3 my-3">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="first name"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="last name"
          onChange={(e) => setlastname(e.target.value)}
        />
        <input className="form-control mb-3" type="text" placeholder="email" onChange={(e) => setemail(e.target.value)} />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
};

export default SignUp;

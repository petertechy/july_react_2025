import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    let endpoint = "http://localhost:5000/signin";
    let userInput = { email, password };
    axios
      .post(endpoint, userInput)
      .then((response) => {
        console.log(response)
        if (response.data.status) {
            localStorage.token = response.data.token
            navigate("/dashboard");
            // localStorage.setItem(response.data.token)
        } else {
          setmessage(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mx-auto col-7 p-3 my-4 shadow border">
        <h1 className="text-success display-3 fw-bold">Sign In</h1>
      <h6 className="text-danger">{message}</h6>
        <input
          type="text"
          placeholder="example@sqimail.com"
          className="form-control mb-3"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="form-control mb-3"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={handleLogin} className="btn btn-success w-100 my-2">
          Sign In
        </button>
      </div>
    </>
  );
};

export default SignIn;

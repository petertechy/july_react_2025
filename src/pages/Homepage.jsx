import React from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/image.avif";
import Card from "../components/Card";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/about");  
  };
  
  const handleClick = () =>{
    alert('Hello there')
  }
  return (
    <>
      <div className="text-center my-3">
        <Card onClick={handleClick} title= "Edit" color="btn btn-danger me-3"/>
        <Card onClick={handleClick} title= "Delete" color="btn btn-success me-3"/>
        <Card onClick={handleClick} title= "View Details" color="btn btn-primary"/>
      </div>



      <div className="mx-auto col-8 rounded my-4 p-3 shadow text-center">
        <h1 className="text-primary">Home page</h1>
        <img src={Image1} alt="" width={500} />
        <button className="btn btn-primary w-100 my-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Homepage;

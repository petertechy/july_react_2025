import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import FormData from "./pages/FormData";
import Fish from "./pages/Fish";
import Meat from "./pages/Meat";
import Product from "./pages/Product";
import FetchData from "./pages/FetchData";
import LoadUsers from "./pages/LoadUsers";
import Formik from "./pages/Formik";
import ClassReact from "./pages/ClassReact";
import Reference from "./pages/Reference";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="home" element={<Navigate to="/" />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="aboutus" element={<Navigate to="about" />} />

        <Route path="contact" element={<Contact />} />

        <Route path="form" element={<FormData />} />

        <Route path="profile/:id" element={<UserProfile />} />
        <Route path="fetch" element={<FetchData />} />
        <Route path="load" element={<LoadUsers />} />
        <Route path="formik" element={<Formik/>}/>
        <Route path="ref" element={<Reference/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="class" element={<ClassReact title="Good morning" age="30"/>}/>


        <Route path="product" element={<Product />}>
          <Route path="fish" element={<Fish />} />
          <Route path="meat" element={<Meat />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

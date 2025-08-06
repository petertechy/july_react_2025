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

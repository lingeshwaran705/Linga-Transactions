import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Products from "../pages/Products";
import SignUp from "../pages/SignUp";

function FrontPage() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default FrontPage;

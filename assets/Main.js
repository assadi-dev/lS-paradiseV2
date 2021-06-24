import React from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";

export const Main = () => {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
};

export default Main;

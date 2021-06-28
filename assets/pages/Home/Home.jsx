import React, { Component } from "react";
import { connect } from "react-redux";
import "./home.css";
import Intro from "../Intro/Intro";
import MainSection from "../Section/MainSection";
import Footer from "../../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div id="wrapper">
        <Intro />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Home;

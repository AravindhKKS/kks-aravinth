import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Self from "../../components/Self/Self";
import About from "../../components/About/About";
import Course from "../../components/Course/Course";
import Project from "../../components/Project/Project";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Self />
      <About />
      <Course />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../components/Landing/Hero/Hero";
import Navbar from "../components/Landing/Navbar/Navbar";
import Work from "../components/Landing/Work/Work";

function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Work></Work>
    </>
  );
}

export default Landing;

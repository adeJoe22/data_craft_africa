import React from "react";
import HeroSection from "../components/HeroSection";
import Service from "../components/OurServices";
import Products from "../components/Products";
import Reference from "../components/References";
import Welcome from "../components/Welcome";
import { welcomeData } from "../components/Welcome/Data";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Welcome {...welcomeData} />
      <Products />
      <Service />
      <Reference />
    </>
  );
};

export default Home;

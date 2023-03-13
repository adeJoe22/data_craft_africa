import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import { welcomeData } from "../components/Welcome/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Welcome {...welcomeData} />
      <Products />
      <Footer />
    </>
  );
};

export default Home;

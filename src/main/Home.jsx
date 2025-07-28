import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Background from "../components/Background";
import Zustand from "./Zustand";
import ShieldAnimation from "../components/ShieldAnimation";
import Invest from "./Invest";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Navbar from "../header/Navbar";
import i18n from "i18next";


i18n




const Home = () => {

  
  return (
      <div className="">
        <Navbar />
      <Hero />
      <Background/>
      <Invest />
      <Zustand />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
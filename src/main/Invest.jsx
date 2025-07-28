import { useState, useEffect } from "react";
import React from "react";
import SecondBackground from "../components/SecondBackground";
import ShieldAnimation from "../components/ShieldAnimation";
import Features from "./Features";
import Button from "../components/Button";
import "../style/Invest.css"
import { useTranslation } from "react-i18next";

const Invest = () => {
    const [animate, setAnimate] = useState(false);
    const { t } = useTranslation();
    
    useEffect(() => {
        setTimeout(() => setAnimate(true), 500);
    }, []);
    
    return (
        <section id="support" className="invest-container">
             

      {/* Блок с анимацией */}
     
          <SecondBackground />
          <div className=" invest-content">

         <ShieldAnimation />

      <div className="invest-text">

      <h1 className="invest-title">
      {t("24/7 access to full service customer support ")}
      </h1>
      <p className="invest-description">
        {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")}
      </p>

      {/* Кнопка */}
      <Button />
      </div>
          </div>
     
    </section>
  );
};

export default Invest;
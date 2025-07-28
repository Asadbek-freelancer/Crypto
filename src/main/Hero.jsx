import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import "../style/Hero.css"
import { useTranslation } from "react-i18next";

const Hero = () => {
 const { t } = useTranslation();
  return (
    <div className="hero-container" >

    <motion.div 
      className=" hero-content"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      >
      <h1 className="hero-title">{t("We make crypto clear and simple")}</h1>
      <Button />  
    </motion.div>
            </div>
  );
};

export default Hero;
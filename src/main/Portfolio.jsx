import { motion } from "framer-motion";
import React from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id="invest" className="">

    <section  className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 bg-black text-white overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090E23] to-[#161A42] opacity-80"></div>

      {/* Левая часть */}
      <div className="relative z-10 max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">
          {t("Take your first step into safe, secure crypto investing")}
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
       <Button />
      </div>

      {/* Анимированный портфель */}
      <motion.div
        className="relative w-40 lg:w-64 h-40 lg:h-64 z-10"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
        {/* Светящийся эффект */}
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut"}}
          />
        <img src="./images/portfolio.png" alt="Briefcase" className="relative w-full h-full object-contain" />
      </motion.div>
    </section>
     <section className="px-6 lg:px-20 py-20 bg-black text-white text-center">
     <h1 className="text-3xl font-bold">{t("A cryto mining platform that invest in you")}</h1>
     <p className="text-gray-400 mt-4">
         {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ")} 
     </p>
 <Button />
    
   </section>
         </div>
  );
};



export default Portfolio;
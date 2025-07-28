import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden -z-10">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-purple-900 opacity-70"></div>

      {/* Плавающие крипто-иконки */}
      <motion.img
        src="/images/Bitcoin.svg"
        alt="Bitcoin"
        className="absolute top-20 left-16 w-36"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/Etherium.svg"
        alt="Ethereum"
        className="absolute top-40 right-32 w-24"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/LiteCoin.svg"
        alt="Litecoin"
        className="absolute bottom-24 left-36 w-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/Monero.svg"
        alt="Ripple"
        className="absolute bottom-32 right-20 w-32 "
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Звёзды */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80"
          style={{
            top:` ${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.3; }
            to { opacity: 1; }
          }
        `}
      </style>

      {/* Контент */}
     {/*  <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We make crypto <br className="hidden md:block" /> clear and simple
        </h1>
        <motion.button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div> */}
    </div>
  );
};

export default Background;
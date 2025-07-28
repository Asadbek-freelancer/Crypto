import { motion } from "framer-motion";
import React from "react";
const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Анимированные линии */}
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <motion.path
          d="M0 120 C300 250, 500 50, 800 180"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2"
          animate={{
            d: [
              "M0 120 C300 250, 500 50, 800 180",
              "M0 160 C250 100, 500 200, 800 120",
              "M0 120 C300 250, 500 50, 800 180",
            ],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

export default BackgroundEffect;
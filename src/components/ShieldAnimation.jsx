import React from "react";
import { motion } from "framer-motion";
import shieldImage from "../assets/shield.png"; // Укажи путь к изображению
const ShieldAnimation = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <motion.img
        src={shieldImage}
        alt="Shield"
        className="w-64 h-64"
        initial={{ scale: 0.8, opacity: 0.5, rotate: 0 }}
        animate={{
          scale: [0.8, 1, 0.8], // Пульсация
          opacity: [0.5, 1, 0.5], // Изменение прозрачности
          rotate: [0, 10, -10, 0], // Покачивание
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ShieldAnimation;
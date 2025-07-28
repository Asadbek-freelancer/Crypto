import React from "react";
import { motion } from "framer-motion";

const FallingToken = ({ delay }) => {
  return (
    <motion.img
      src="/images/Item.svg"
      alt="Token"
      style={{ position: "absolute", width: "50px", left: `${Math.random() * 50}%` , zIndex: 60 }}
      initial={{ y: "-900px", opacity: 1 }}
      animate={{ y: "100px", opacity: 0 }}
      transition={{ duration: 4, ease: "linear", repeat: Infinity, delay }}
    />
  );
};

const ImageWithAnimation = () => {
  return (
    <div className=" absolute bottom-0 m-auto overflow-hidden">
      <img src="./images/Group.png" alt="Ethereum Background" style={{ width: "100%" }} />
      <FallingToken delay={0} />
      <FallingToken delay={1} />
      <FallingToken delay={2} />
      <FallingToken delay={3} />
    </div>
  );
};

export default ImageWithAnimation;

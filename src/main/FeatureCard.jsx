import React from "react";

const FeatureCard = ({ title, text, linkText }) => {
  return (
    
    <div className="bg-gray-900 p-6 rounded-lg text-white w-80">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{text}</p>
      <a href="#" className="text-blue-400 mt-3 block">{linkText} →</a>
    </div>
    
  );
};

export default FeatureCard;
import React from "react";
import { useTranslation } from "react-i18next";

const MinerCard = ({ name, multiplier, color, image }) => {
  const { t } = useTranslation();
  return (
   

    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-64 text-center">
      <img src={image} alt={name} className="w-20 mx-auto mb-4" />
      <h3 className={`text-xl font-bold ${color}`}>{name}</h3>
      <p className={`text-lg ${color}`}>{multiplier}</p>
      <p className="text-gray-400 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white p-3 cursor-pointer">
        {t("Buy Now")}
      </button>
    </div>

  );
};

export default MinerCard;
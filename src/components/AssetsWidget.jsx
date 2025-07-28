// components/AssetsWidget.js


import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AssetsWidget = ({ onSelect, selectedCurrency }) => {
  const [assets, setAssets] = useState([]);
const {t}= useTranslation()
  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await res.json();
        setAssets(data);
      } catch (err) {
        console.error("Ошибка загрузки активов:", err);
      }
    };

    fetchTopCoins();
  }, []);
  

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{t('Assets')}</h2>
      <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
        {assets.map((asset) => (
          <div
            key={asset.id}
            onClick={() => onSelect(asset.id)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
              selectedCurrency === asset.id ? "bg-purple-700" : "bg-[#44475a]"
            }`}
          >
            <img src={asset.image} alt={asset.name} className="w-8 h-8" />
            <div>
              <p className="font-medium">{asset.name}</p>
              <p className="text-sm text-gray-400">${asset.current_price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default AssetsWidget;
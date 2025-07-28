// Dashboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AssetsWidget from "../components/AssetsWidget";
import Chart from "../components/Chart"; // Импортируем наш новый график
import { t } from "i18next";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [coinNameMap, setCoinNameMap] = useState({});

  

  // Получаем данные о цене крипты
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCurrency.toLowerCase()}/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: "30",
            },
          }
        );

        const chartData = response.data.prices.map(([timestamp, price]) => ({
          month: new Date(timestamp).toLocaleDateString("en", {
            month: "short",
            day: "numeric",
          }),
          price,
        }));

        setData(chartData);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [selectedCurrency]);

  // Получаем список монет (чтобы отображать их названия)
  useEffect(() => {
    const fetchCoinsList = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        const map = {};
        res.data.forEach((coin) => {
          map[coin.id] = coin.name;
        });
        setCoinNameMap(map);
      } catch (err) {
        console.error("Ошибка загрузки списка монет:", err);
      }
    };

    fetchCoinsList();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Основное содержимое */}
      <div className="flex-1 p-4 sm:p-8 ml-64 dashboard">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Левая часть: Метрики и График */}
          <div className="lg:col-span-2 space-y-8">
            {/* Метрики */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { title: "📷 Total assets", value: "$87,743" },
                { title: "💰 Total deposits", value: "$78,342" },
                { title: "📈 APY", value: "+12.3%" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#44475a] rounded-lg flex flex-col items-start"
                >
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <h2 className="text-xl sm:text-2xl mt-2">{item.value}</h2>
                </div>
              ))}
            </div>

            {/* Выбранная валюта и баланс */}
            <div className="flex items-center gap-4">
              <button className="bg-[#44475a] px-4 py-2 rounded-lg text-sm sm:text-base">
                {coinNameMap[selectedCurrency] || selectedCurrency} ⌄
              </button>
              <h2 className="text-3xl sm:text-4xl">$78,342</h2>
            </div>

            {/* График */}
            <Chart data={data} />
          </div>

          {/* Правая часть: Виджет активов */}
          <AssetsWidget
            onSelect={(coinId) => setSelectedCurrency(coinId)}
            selectedCurrency={selectedCurrency}
          />
        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
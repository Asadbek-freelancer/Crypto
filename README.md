# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.














import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Selector from "../components/Selector";
/* import Chart from "../components/Chart"; */
import AssetsWidget from "../components/AssetsWidget";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");

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

  return (
  
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Основное содержимое */}
        <div className="flex-1 p-4 sm:p-8 ml-64">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 ">

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

              {/* Валюта и баланс */}
              <div className="flex items-center gap-4">
                <button className="bg-[#44475a] px-4 py-2 rounded-lg text-sm sm:text-base">
                  {selectedCurrency} ⌄
                </button>
                <h2 className="text-3xl sm:text-4xl">$78,342</h2>
              </div>

              {/* График */}
             {/*  <Chart data={data} /> */}
            </div>

            {/* Правая часть: Селектор валют */}

           {/*  <Selector
              selectedCurrency={selectedCurrency}
              onChange={setSelectedCurrency}
            /> */}
            <AssetsWidget/>
          </div>
        </div>
      </div>
  
  );
};

export default Dashboard;





























import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import BtcLogo from '../../images/bitcoinbtclogo.png'
import EthLogo from '../../images/ethereumethlogo.png'
import LtcLogo from '../../images/litecoinltclogo.png'
import USDTLogo from '../../images/tetherusdtlogo.png'
import BNCLogo from '../../images/binancecoinlogopngtransparent.png'
import SolLogo from '../../images/solanaPhotoroom.png'
import SHLogo from '../../images/shibainushiblogo.png'
import DogeLogo from '../../images/dogecoinPhotoroom.png'

const assets = [
  { name: "Bitcoin", amount: "$23,3B", percent: "71,68%", icon: BtcLogo },
  { name: "Ethereum", amount: "$13,3B", percent: "71,68%", icon: EthLogo },
  { name: "LTC", amount: "$5,3B", percent: "71,68%", icon: LtcLogo },
  { name: "USDT", amount: "$3,3B", percent: "71,68%", icon: USDTLogo },
  { name: "BINANCE", amount: "$6,3B", percent: "71,68%", icon: BNCLogo },
  { name: "Solana", amount: "$7,3B", percent: "23,5%", icon: SolLogo },
  { name: "Shiba", amount: "$1,3B", percent: "51,6%", icon: SHLogo },
  { name: "Dogecoin", amount: "$3,3B", percent: "30,26%", icon: DogeLogo },
];

const AssetsWidget = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
const { t } = useTranslation();
  // Загружаем комментарии при загрузке компонента
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:5001/comments");
        setComments(response.data);
      } catch (error) {
        console.error("Ошибка загрузки комментариев:", error);
      }
    };
    fetchComments();
  }, []);

  // Добавляем новый комментарий и сохраняем в db.json
  const addComment = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:5001/comments", {
        text: newComment,
      });
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
    }
  };

  return (
    <div className="fixed right-4 top-20 space-y-6 max-w-xs">
      {/* Assets Section */}
      <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg">
        <h2 className="text-white text-lg mb-4">Assets</h2>
        <div className="max-h-64 pr-2 overflow-y-auto scrollbar-thin scrollbar-color-transparent">
          {assets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img src={asset.icon} alt={asset.name} className="w-6 h-6" />
                <span className="text-white">{asset.name}</span>
              </div>
              <div className="text-right">
                <p className="text-white">{asset.amount}</p>
                <p className="text-gray-400 text-sm">{asset.percent}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Comments Section */}
      <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg">
        <h3 className="text-white text-lg mb-2">{t("Comments")}</h3>

        {/* Форма для ввода нового комментария */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={addComment}
            className="bg-gray-800 text-white rounded-lg px-4 hover:bg-gray-700"
          >
            {t("Send")}
          </button>
        </div>

        {/* Список комментариев */}
        <div className="max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {comments.length === 0 ? (
            <p className="text-gray-400">No comments yet.</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-800 text-white p-2 mb-2 rounded-lg"
              >
                {comment.text}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};


export default AssetsWidget;
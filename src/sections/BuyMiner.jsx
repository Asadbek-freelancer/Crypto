import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import BuyMiners from '../components/BuyMiners';


const BuyMiner = () => {
  return (
   
      <div id='buyminers' className="flex flex-wrap w-full min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white ">
        {/* Sidebar слева */}
        <Sidebar />

        {/* Контейнер справа */}
        <div id='buy_miner'  className="flex justify-center flex-wrap  ml-64 p-6">
          <BuyMiners />
          
        </div>
      </div>
   
  );
};

export default BuyMiner;
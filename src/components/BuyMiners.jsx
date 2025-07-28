import React from "react";
import MinerCard from "./MinerCard";
import bronzeImg from "../assets/bronze.png"
import silverImg from "../assets/silver.png"
import goldImg from "../assets/gold.png"
import platinumImg from "../assets/platinum.png"
import daimondImg from "../assets/daimond.png"
import legendaryImg from "../assets/legendary.png"
const miners = [
  { id: 1, name: "Bronze", multiplier: "x0.5", color: "text-amber-600", image: bronzeImg},
  { id: 2, name: "Silver", multiplier: "x1.0", color: "text-gray-400", image:  silverImg},
  { id: 3, name: "Gold", multiplier: "x3.0", color: "text-yellow-500", image: goldImg },
  { id: 4, name: "Platinum", multiplier: "x12.0", color: "text-blue-600", image:  platinumImg},
  { id: 5, name: "Diamond", multiplier: "x38.0", color: "text-purple-600", image:  daimondImg},
  { id: 6, name: "Legendary", multiplier: "x86.0", color: "text-red-600", image:  legendaryImg},
];

const BuyMiners = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {miners.map((miner) => (
        <MinerCard key={miner.id} {...miner} />
      ))}
    </div>
  );
};

export default BuyMiners;


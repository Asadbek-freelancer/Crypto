import React from "react";
/* import BtcLogo from '../images/bitcoinbtclogo.png'
import EthLogo from '../images/ethereumethlogo.png'
import LtcLogo from '../images/litecoinltclogo.png'
import USDTLogo from '../images/tetherusdtlogo.png'
import BNCLogo from '../images/binancecoinlogopngtransparent.png'
import SolLogo from '../images/solanaPhotoroom.png'
import SHLogo from '../images/shibainushiblogo.png'
import DogeLogo from '../images/dogecoinPhotoroom.png' */
const currencies = [
  { id: "BTC", name: "Bitcoin", icon: `https://cryptologos.cc/logos/bitcoin-btc-logo.png` },
  { id: "ETH", name: "Ethereum", icon: "EthLogo" },
  { id: "LTC", name: "Lightcoin", icon: "LtcLogo" },
  { id: "USDT", name: "Usdt", icon: "USDTLogo" },
  { id: "BNC", name: "Binance", icon: "BNCLogo" },
  { id: "SOL", name: "Solana", icon: "SolLogo" },
  { id: "Sh", name: "Shiba", icon: "SHLogo" },
  { id: "Dogecoin", name: "Dogecoin", icon: "DogeLogo" },
];

const Selector = ({ selectedCurrency, onChange }) => {
  return (
    <div className="flex flex-col space-y-4 p-4 bg-[#222] rounded-lg">
      <h3 className="text-xl mb-4">Assets</h3>
      {currencies.map((currency) => (
        <button
          key={currency.id}
          className={`flex justify-between items-center p-2 rounded-lg ${
            selectedCurrency === currency.id ? "bg-[#444]" : "bg-transparent"
          }`}
          onClick={() => onChange(currency.id)}
        >
          <span>{currency.icon} {currency.name}</span>
          <span>$23.3B</span>
        </button>
      ))}
      <button className="mt-4 p-2 bg-[#333] rounded-lg">View All</button>
    </div>
  );
};

export default Selector;
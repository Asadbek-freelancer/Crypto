import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";
import '../style/Deposits.css'

import BtcLogo from '../../images/bitcoinbtclogo.png'
import EthLogo from '../../images/ethereumethlogo.png'
import LtcLogo from '../../images/litecoinltclogo.png'

const currencies = [
  { id: "bitcoin", name: "BTC", address: "bc1qexampleaddress", image: BtcLogo },
  { id: "ethereum", name: "ETH", address: "0xexampleaddress", image:  EthLogo},
  { id: "litecoin", name: "LTC", address: "ltc1exampleaddress", image: LtcLogo },
];

const DepositInfo = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(0);
  const [copied, setCopied] = useState(false);

  const fetchPrice = async (currencyId) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currencyId}&vs_currencies=usd`
      );
      setPrice(response.data[currencyId].usd);
    } catch (error) {
      console.error("Ошибка загрузки цены:", error);
    }
  };

  useEffect(() => {
    fetchPrice(currency.id);
    const interval = setInterval(() => fetchPrice(currency.id), 30000);
    return () => clearInterval(interval);
  }, [currency]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currency.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <div className="sidebar">
       <Sidebar />
      </div>

      <div className="card">
        <div className="header">
          <div className="option">

          <img src={currency.image} alt={currency.name} width={36} height={24} />
          <select onChange={(e) => setCurrency(currencies.find(c => c.id === e.target.value))} value={currency.id}>
            {currencies.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
            </div>
          <span>{price.toFixed(8)} USD</span>
        </div>

        <div className="qr-container">
          <QRCodeCanvas value={currency.address} size={180} />
        </div>

        <div className="address-container">
          <p>Deposit Address ({currency.name})</p>
          <div className="address-box">
            <span>{currency.address}</span>
            <button onClick={handleCopy}>📋</button>
          </div>
          {copied && <span className="copied-msg">Address copied!</span>}
        </div>

        <p className="info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="button  bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white font-bold">PLACE WITHDRAWAL</button>
      </div>
    </div>
  );
};

export default DepositInfo;
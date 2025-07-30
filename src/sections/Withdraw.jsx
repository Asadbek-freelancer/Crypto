import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useWithdrawStore from "../store/useWithdrawStore";
import useCryptoStore from "../store/useCryptoStore";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

import BtcLogo from '/images/bitcoinbtclogo.png'
import EthLogo from '/images/ethereumethlogo.png'
import LtcLogo from '/images/litecoinltclogo.png'
import USDTLogo from '/images/tetherusdtlogo.png'
import BNCLogo from '/images/binancecoinlogopngtransparent.png'

// Иконки для валют
const currencyIcons = {
  BTC: BtcLogo,
  ETH: EthLogo,
  LTC: LtcLogo,
  USDT: USDTLogo,
  BNB: BNCLogo,
};

const Withdraw = () => {
  const {
    
    currency,
    availableCurrencies,
    withdrawalAmount,
    withdrawalAddress,
    method,
    fee,
    setCurrency,
    setAmount,
    setAddress,
    setMethod,
    reset,
  } = useWithdrawStore();

  const { prices, fetchPrices } = useCryptoStore();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchPrices().finally(() => setLoading(false));
  }, []);

  const handleWithdraw = async () => {
    if (!withdrawalAmount || !withdrawalAddress) return alert("Заполните все поля");

    const data = {
      currency,
      amount: withdrawalAmount,
      address: withdrawalAddress,
      method,
      fee,
      received: withdrawalAmount - fee,
    };

    try {
      await axios.post("http://localhost:5001/transactions", data);
      alert("Вывод средств успешно отправлен!");
      reset();
    } catch (error) {
      console.error("Ошибка при выводе:", error);
      alert("Ошибка при выводе средств");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-purple-900 to-black text-white">
        <Sidebar />
      <div className="w-full max-w-md bg-black/50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{t("Вывод средств")}</h2>

        {/* Выбор валюты */}
        <div className="mb-4">
          <label className="block text-sm">{t("Валюта")}</label>
          <div className="flex items-center space-x-2">
            <img src={currencyIcons[currency]} alt={currency} className="w-6 h-6" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 bg-gray-800 rounded-md text-white"
            >
              {availableCurrencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Текущая цена: {`loading ? "Загрузка..." : $${prices[currency.toLowerCase()] ?? "N/A"}`}
          </p>
        </div>

        {/* Выбор метода */}
        <div className="mb-4 flex items-center justify-between">
          <span>FaucetPay (меньше комиссия)</span>
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="hidden"
              checked={method === "direct"}
              onChange={() => setMethod(method === "direct" ? "faucetpay" : "direct")}
            />
            <span className="block w-12 h-6 bg-gray-700 rounded-full cursor-pointer"></span>
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                method === "direct" ? "translate-x-6" : "translate-x-0"
              }`}
            ></span>
          </label>
          <span>{t("Прямой вывод")}</span>
        </div>

        {/* Адрес вывода */}
        <input
          type="text"
          placeholder="Введите адрес"
          value={withdrawalAddress}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded-md text-white"
        />

        {/* Сумма вывода */}
        <input
          type="number"
          placeholder="Введите сумму"
          value={withdrawalAmount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-3 bg-gray-800 rounded-md text-white"
        />
<p className="text-sm text-gray-400">
          {t("Комиссия")}: {fee} {currency} | {t("Вы получите")}: {(withdrawalAmount - fee) || 0} {currency}
        </p>

        <button
          onClick={handleWithdraw}
          className="w-full p-3 mt-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md text-white font-bold hover:opacity-90"
        >
          {t("ВЫВЕСТИ")}
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
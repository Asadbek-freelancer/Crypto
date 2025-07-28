import React from "react";
import { useEffect } from "react";
import useCryptoStore from "../store/useCryptoStore";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CryptoTable = () => {
  const { cryptos, fetchCryptos } = useCryptoStore();
const { t } = useTranslation();
  useEffect(() => {
    fetchCryptos();
  }, []); // Добавлен массив зависимостей

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 flex justify-center">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-800 text-white">
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Change</th>
            <th className="p-3">Trade</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id} className="border-b hover:bg-gray-700">
              <td className="p-3 flex items-center gap-2">
                <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                {crypto.name}
              </td>
              <td className="p-3">${crypto.current_price.toLocaleString()}</td>
              <td
                className={`p-3 ${
                  crypto.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
                <Link to="/dashboard">
              <td className="p-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                {t("  Trade Now")}
                </button>
              </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
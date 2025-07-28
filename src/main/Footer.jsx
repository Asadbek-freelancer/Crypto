import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden gradient-bg text-white px-6 lg:px-20 py-16">
      <BackgroundEffect />

      {/* Верхний блок с подпиской */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold">{t("Receive transmissions")}</h2>
        <p className="text-gray-400 mt-4">
         {t(" Unsubscribe at any time.")}{" "}
          <a href="#" className="text-cyan-400 hover:underline">{t("Privacy policy")} →</a>
        </p>

        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 bg-gray-800 text-white rounded-l-lg outline-none w-64 md:w-96"
          />
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition">
            →
          </button>
        </div>
      </div>

      {/* Разделенный на колонки список */}
      <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
        {/* Описание */}
        <div>
          <p>{t("CoinFlip, the world's leading bitcoin ATM operator...")}</p>
          <p className="mt-4">{t("Sign up to get the latest in CoinFlip news, discounts, and more.")}</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 bg-gray-800 text-white rounded-l-lg outline-none w-48"
            />
            <button className="px-4 py-2 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600 transition">
              →
            </button>
          </div>
        </div>

        {/* Компания */}
        <div>
          <h3 className="text-white font-semibold">{t("Company")}</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">{t("About")}</a></li>
            <li><a href="#support" className="hover:text-white">{t("Support")}</a></li>
            <li><a href="#trade" className="hover:text-white">{t("Buy sell")}</a></li>
            <li><a href="#invest" className="hover:text-white">{t("Invest")}</a></li>
            
          </ul>
        </div>

        {/* Политика и условия */}
        <div>
          <h3 className="text-white font-semibold">{t("Privacy Policy and Terms of Service")}</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-white">{t("CoinFlip Privacy Policy")}</li>
            <li className="hover:text-white">{t("CoinFlip Biometrics Privacy Policy")}</li>
            <li className="hover:text-white">{t("CoinFlip Financial Privacy Notice")}</li>
            <li className="hover:text-white">{t("CoinFlip Terms of Service")}</li>
           
          </ul>
        </div>
      </div>

      {/* Копирайт */}
      <div className="relative z-10 mt-12 text-center text-gray-500">
       {t(" © 2024 CoinFlip Holdings, LLC")}
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Hero from "../main/Hero";


const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const HandleChoice = (lang) => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(lang);
    }
  };
  return (
    <nav className="flex justify-between items-center p-5 text-white absolute top-0 w-full z-50 bg-inherit">
      {/* Логотип */}
      <Link to="/" className="text-3xl font-bold">
      <div className="flex items-center gap-5">
      <img src="../images/Logo.svg" alt="" />
        <h1>Crypto</h1>
      </div>
      </Link>

      {/* Меню для десктопа */}
      <div className="hidden md:flex space-x-10">
        <NavLink to="/">{t("Home")}</NavLink>
        <NavLink to="/markets">{t("Markets")}</NavLink>
        <NavLink to="/business">{t("Business")}</NavLink>
        <NavLink to="/support">{t("Support")}</NavLink>
      </div>

      {/* Переключатель языков и кнопки */}
      <div className="hidden md:flex space-x-4">
        <button className="cursor-pointer" onClick={() => HandleChoice("ru")}>RU</button>
        <button className="cursor-pointer" onClick={() => HandleChoice("en")}>EN</button>
        <Link to="/login" className="border px-4 py-2 rounded-lg">
          {t("Login")}
        </Link>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg"
        >
          {t("Sign in")}
        </Link>
      </div>

      {/* Бургер-меню для мобильных устройств */}
      <button className="md:hidden z-40" onClick={() => setIsOpen(!isOpen)}>
        <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/10613/10613684.png" alt="" />
      </button>

      {/* Выпадающее меню на мобильных устройствах */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-black flex flex-col items-center space-y-4 md:hidden">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            {t("Home")}
          </NavLink>
          <NavLink to="/markets" onClick={() => setIsOpen(false)}>
            {t("Markets")}
          </NavLink>
          <NavLink to="/business" onClick={() => setIsOpen(false)}>
            {t("Business")}
          </NavLink>
          <NavLink to="/support" onClick={() => setIsOpen(false)}>
            {t("Support")}
          </NavLink>

          <button onClick={() => HandleChoice("ru")}>RU</button>
          <button onClick={() => HandleChoice("en")}>EN</button>

          <Link
            to="/login"
            className="border px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            {t("Login")}
          </Link>

          <Link
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            {t("Sign in")}
          </Link>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
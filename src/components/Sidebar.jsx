import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

 const { t } = useTranslation();
const navigate = useNavigate()

const handleLogOut =() =>{
  
  setTimeout(() => {
    
    localStorage.clear()
    navigate("/")
  }, 1000);
}

  

  return (
    <>
      {/* Кнопка меню (мобильная версия) */}
      <button id="button" 
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 p-2 rounded"
      >
        <Bars3Icon className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <div id="sidebar"
        className={`h-screen bg-black/80 text-white w-64 fixed top-0 left-0 p-5 flex flex-col justify-between transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Кнопка закрытия (мобильная версия) */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Лого */}
        <div>
          <div className="flex items-center gap-3 mb-8">
          <Link to="/"> <img className="w-8" src="../images/Logo.svg" alt="Logo" />  </Link>
            <Link to="/" className="text-2xl font-bold">
              Crypto
            </Link>
          </div>
          <nav className="flex flex-col gap-4">
            <SidebarLink to="/dashboard" icon={<HomeIcon className="w-6 h-6" />} text="Dashboard" setIsOpen={setIsOpen} />
            <SidebarLink to="/withdraw" icon={<ArrowRightOnRectangleIcon className="w-6 h-6" />} text="WithDraw" setIsOpen={setIsOpen} />
            <SidebarLink to="/deposits" icon={<CurrencyDollarIcon className="w-6 h-6" />} text="Deposits" setIsOpen={setIsOpen} />
            <SidebarLink to="/buyminer" icon={<ShoppingBagIcon className="w-6 h-6" />} text="Buy Miner" setIsOpen={setIsOpen} />
            <SidebarLink to="/profile" icon={<UserIcon className="w-6 h-6" />} text="Profile" setIsOpen={setIsOpen} />
          </nav>
        </div>

        {/* Кнопка выхода */}
        <NavLink
          to="/logout"
          className="flex items-center gap-3 text-gray-400 hover:text-white transition"
        >
          <ArrowRightOnRectangleIcon className="w-6 h-6" />
          <span onClick={handleLogOut}>{t("Log Out")}</span>
        </NavLink>
      </div>
    </>
  );
};

// Компонент ссылки
const SidebarLink = ({ to, icon, text, setIsOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 py-2 px-3 rounded-md transition ${
          isActive ? "bg-purple-500" : "hover:bg-gray-700"
        }`
      }
      onClick={() => setIsOpen(false)} // Закрытие Sidebar при клике (мобильная версия)
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
};

export default Sidebar;
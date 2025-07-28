import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import ImageWithAnimation from "../animation/ImageWithAnimation";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import "../style/Login.css"
import { useTranslation } from "react-i18next";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="flex h-screen bg-black ">
      <div className="motion">

      <ImageWithAnimation />
      </div>
      <Navbar />
      {/* Левая часть с графикой */}
      <div className="w-1/2 relative bottom-0 z-10 imglog">
        <img
          src="./images/Enviro.png" 
          alt="crypto graphics"
          className="relative bottom-0 top-[53%]"
        />
        <img
          src="./images/Hosting.png" 
          alt="crypto graphics"
          className="absolute bottom-0 left-[10.5%] z-50 "
        />

      </div>

      {/* Правая часть с формой */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white sign ">
        <div className="bg-black p-10 rounded-lg w-96">
            <div className="flex items-center gap-4 mb-10">

            <img className="w-12" src="/images/Logo.svg" alt="" />
          <h2 className="text-3xl font-bold mb-2 text-center">
            <span className="text-purple-400">Crypto</span>
          </h2>
            </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">{t("Email")}</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">{t("Password")}</label>
            <input
             type={showPassword ? "text" : "password"}
             className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
           />
           <button
             onClick={() => setShowPassword(!showPassword)}
             className="relative left-70 bottom-8 text-gray-500"
           >
             {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp /> }
           </button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {t("Save Email and Password")}
            </label>
            <Link to="/signup" className="text-purple-400 hover:underline">
              {t("Don’t have an account?")}
           </Link>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-400 to-blue-500 py-2 rounded-md text-white font-bold">
            {t("Sign in")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
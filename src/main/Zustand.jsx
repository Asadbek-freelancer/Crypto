import React from "react";
import CryptoTable from "../components/CryptoTable";
import ShieldAnimation from "../components/ShieldAnimation";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";


function Zustand() {
  const { t } = useTranslation();
  return (
      <div id="trade" className=" bg-black text-white min-h-screen p-24 ">
      <header className="text-center">
        <h1 className="text-3xl font-bold">{t("Buy and sell with the lowest fees in the industry")}</h1>
        <p className="text-gray-400 mt-2">
          
        </p>
        <Button />
      </header>

      <section className="mt-10">
        <CryptoTable />
      </section>
    </div>
  );
}

export default Zustand;
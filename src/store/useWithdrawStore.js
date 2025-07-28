import { create } from "zustand";

const useWithdrawStore = create((set) => ({
  balance: 0.05, // Пример баланса
  currency: "BTC",
  availableCurrencies: ["BTC", "ETH", "LTC", "USDT", "BNB"],
  withdrawalAmount: "",
  withdrawalAddress: "",
  method: "direct",
  fee: 0.003,

  setCurrency: (currency) => set({ currency }),
  setAmount: (amount) => set({ withdrawalAmount: amount }),
  setAddress: (address) => set({ withdrawalAddress: address }),
  setMethod: (method) => set({ method }),
  reset: () =>
    set({
      withdrawalAmount: "",
      withdrawalAddress: "",
      method: "direct",
    }),
}));

export default useWithdrawStore;    
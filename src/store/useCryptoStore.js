import { create, useStore } from "zustand";
import axios from "axios";
import { get } from "react-hook-form";
const coinSymbols = {
    bitcoin: "BTCUSDT",
    ethereum: "ETHUSDT",
    binancecoin: "BNBUSDT",
    solana: "SOLUSDT",
    cardano: "ADAUSDT",
  };
  
const useCryptoStore = create((set) => ({
  cryptos: [],
  fetchCryptos: async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: { vs_currency: "usd", order: "market_cap_desc", per_page: 6 },
        }
      );
      set({ cryptos: data });
    } catch (error) {
      console.error("Error fetching crypto data", error);
    }
  },
  
    balance: 0.05,
    currency: "BTC",
    availableCurrencies: ["BTC", "ETH", "LTC", "USDT", "BNB"], // Добавляем список валют
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
      prices: {},
      fetchPrices: async () => {
        try {
          const { data } = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,tether,binancecoin&vs_currencies=usd"
          );
          set({
            prices: {
              btc: data.bitcoin.usd,
              eth: data.ethereum.usd,
              ltc: data.litecoin.usd,
              usdt: data.tether.usd,
              bnb: data.binancecoin.usd,
            },
          });
        } catch (error) {
          console.error("Ошибка загрузки цен:", error);
        }
      },
      currency: "BTC",
      price: 0,
      address: "283h976qwe9ry25r817gf31f4fk17f9g",
      currencies: {
        BTC: { name: "Bitcoin", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", api: "bitcoin" },
        ETH: { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png", api: "ethereum" },
        USDT: { name: "Tether", icon: "https://cryptologos.cc/logos/tether-usdt-logo.png", api: "tether" },
        BNB: { name: "Binance Coin", icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", api: "binancecoin" },
      },
      
      FetchPrice: async () => {
        try {
          const { currency, currencies } = useCryptoStore.getState();
      
          // Проверяем наличие данных перед запросом
          if (!currency) {
            console.warn("Валюта не определена.");
            return;
          }
      
          if (!currencies || !currencies[currency]) {
            console.warn(`Некорректные данные валюты: ${currency}`);
            return;
          }
      
          const apiId = currencies[currency].api;
      
          if (!apiId) {
            console.warn("Отсутствует API идентификатор для валюты.");
            return;
          }
      
          const res = await axios.get(
           `https://api.coingecko.com/api/v3/simple/price?ids=${apiId}&vs_currencies=usd`
          );
          
          const price = res.data?.[apiId]?.usd;
          
       
          if (price !== undefined) {
            set({ price });
          } else {
            console.warn("Не удалось получить цену для валюты:", currency);
          }
        } catch (error) {
          console.error("Ошибка загрузки цены:", error);
        }
      },
      
      setCurrency: (newCurrency) => {
        const { currencies } = useCryptoStore.getState();
      
        if (!currencies[newCurrency]) {
          console.warn(`Валюта ${newCurrency} не найдена.`);
          return;
        }
      
        set({ currency: newCurrency });
        useCryptoStore.getState().FetchPrice();
      },

  currency: 'ethereum', // Валюта по умолчанию
  price: 0, // Текущая цена
  data: [], // Данные для графика
  interval: '1', // Интервал по умолчанию (1 день)
  isLoading: false, // Состояние загрузки

  // Функция загрузки данных с CoinGecko API
  fetchData: async (currency, interval) => {
    set({ isLoading: true }); // Начало загрузки
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart`, {
        params: { vs_currency: 'usd', days: interval },
      });

      // Преобразование данных для графика
      const chartData = response.data.prices.map(([time, price]) => ({
        time: new Date(time).toLocaleDateString(), // Форматирование даты
        price,
      }));

      set({
        data: chartData,
        price: chartData[chartData.length - 1]?.price || 0, // Последняя цена
        isLoading: false, // Завершение загрузки
      });
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      set({ isLoading: false }); // Завершение загрузки при ошибке
    }
  },

  // Установка новой валюты
  setCurrency: (currency) => set({ currency }),

  // Установка нового интервала
  seеInterval: (interval) => set({ interval }),

    }));
  

export default useCryptoStore;


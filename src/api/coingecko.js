import axios from "axios";

const COINGECKO_API = "https://api.coingecko.com/api/v3";
const BINANCE_API = "https://api.binance.com/api/v3/klines";

export const getCryptoData = async (coin) => {
  try {
    const response = await axios.get(`${COINGECKO_API}/coins/${coin}/market_chart`, {
      params: { vs_currency: "usd", days: "7", interval: "daily" },
    });

    return response.data.prices.map(([timestamp, price]) => ({
      time: new Date(timestamp).toLocaleDateString(),
      price,
    }));
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    return [];
  }
};

export const getCandlestickData = async (symbol) => {
  try {
    const response = await axios.get(BINANCE_API, {
      params: { symbol: symbol.toUpperCase(), interval: "1d", limit: 7 },
    });

    return response.data.map(([time, open, high, low, close]) => ({
      date: new Date(time),
      open: parseFloat(open),
      high: parseFloat(high),
      low: parseFloat(low),
      close: parseFloat(close),
    }));
  } catch (error) {
    console.error("Ошибка загрузки свечных данных:", error);
    return [];
  }
};
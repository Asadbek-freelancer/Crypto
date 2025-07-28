import { MenuItem, Select } from "@mui/material";
import useCryptoStore from "../store/useCryptoStore";


const CryptoSelector = () => {
  const { selectedCrypto, setSelectedCrypto } = useCryptoStore();

  return (
    <Select value={selectedCrypto} onChange={(e) => setSelectedCrypto(e.target.value)} sx={{ color: "white" }}>
      <MenuItem value="BTC">BTC</MenuItem>
      <MenuItem value="ETH">ETH</MenuItem>
      <MenuItem value="USDT">USDT</MenuItem>
    </Select>
  );
};

export default CryptoSelector;
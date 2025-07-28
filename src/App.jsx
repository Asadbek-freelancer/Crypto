import React from "react";
import Background from "./components/Background";
import Navbar from "./header/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./sign in/Login";
import SignUp from "./sign in/SignUp";
import Home from "./main/Home";
import NotFound from "./main/NotFound";
import Dashboard from "./sections/Dashboard";
import Withdraw from "./sections/Withdraw";
import Deposits from "./sections/Deposits";
import Sidebar from "./components/Sidebar";
import BuyMiners from "./components/BuyMiners";
import BuyMiner from "./sections/BuyMiner";
import Profile from "./sections/Profile";


function App() {
  return (
    <div className="relative ">
    
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/buyminer" element={<BuyMiner />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
    </div>
  );
}

export default App;
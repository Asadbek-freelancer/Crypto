import React from "react";
import { useState, useEffect } from "react";
import { Avatar, TextField, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    btcAddress: "",
    ethAddress: "",
    avatar: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) setProfile(savedProfile);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Sidebar */}
     <Sidebar />
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-black/60 p-8 rounded-xl w-full max-w-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8 relative">
            <label htmlFor="avatar-upload" className="cursor-pointer relative">
              <Avatar
                src={profile.avatar || "/default-avatar.png"}
                alt="Profile"
                sx={{ width: 64, height: 64 }}
              />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
            <TextField
              variant="standard"
              name="name"
              value={profile.name}
              onChange={handleChange}
              InputProps={{
                className: "text-white text-3xl font-semibold px-3 w-40",
                disableUnderline: true,
              }}
              className="bg-blue-400 p-10 rounded-2xl font-bold"
            />
          </div>

          {/* Form */}
          <form className="space-y-6 flex flex-col gap-3">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={profile.email}
              onChange={handleChange}
              InputProps={{ className: "text-white" }}
              className="bg-gray-400 rounded-lg"
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              value={profile.password}
              onChange={handleChange}
              InputProps={{ className: "text-white" }}
              className="bg-gray-400 rounded-lg"
            />
            <TextField
              fullWidth
              label="BTC Address"
              variant="outlined"


name="btcAddress"
              value={profile.btcAddress}
              onChange={handleChange}
              InputProps={{ className: "text-white" }}
              className="bg-gray-400 rounded-lg"
            />
            <TextField
              fullWidth
              label="ETH Address"
              variant="outlined"
              name="ethAddress"
              value={profile.ethAddress}
              onChange={handleChange}
              InputProps={{ className: "text-white" }}
              className="bg-gray-400 rounded-lg"
            />

            <Button
              variant="contained"
              onClick={handleSave}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              fullWidth
            >
              Save
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
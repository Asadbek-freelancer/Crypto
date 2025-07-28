import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import bcrypt from "bcryptjs";
import axios from "axios";
import Background from "../components/Background";
import Navbar from "../header/Navbar";
import { useTranslation } from "react-i18next";

// Валидация с Zod
const schema = z
  .object({
    email: z.string().email("Неверный формат email"),
    password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
    confirmPassword: z.string(),
    btcAddress: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const URLSERVER = "http://localhost:5000/users";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);

      const user = {
        email: data.email,
        password: hashedPassword,
        btcAddress: data.btcAddress || "",
      };

      await axios.post(URLSERVER, user);
      setMessage("Регистрация успешна!");
    } catch (error) {
      setMessage("Ошибка регистрации!");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <Background />
      <Navbar />
      <div className="absolute bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">
          Crypto SignUp
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-2">{t("Email")}</label>
            <input
              {...register("email")}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">{t("Password")}</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">{t("Confirm Password")}</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">{t("BTC Address")} (Optional)</label>
            <input
              {...register("btcAddress")}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-400 to-blue-500 py-2 rounded-md text-white font-bold"
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>

          {message && <p className="text-center text-green-400">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
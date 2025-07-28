/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          "dark-bg": "#0b0f19",
          "purple-light": "#6e44ff",
          "purple-dark": "#20002c",
        },
        backgroundImage: {
          "crypto-gradient": "linear-gradient(to right, #0b0f19, #20002c, #6e44ff)",
        },
      },
    },
    plugins: [],
  };


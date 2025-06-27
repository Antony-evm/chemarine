/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      spacing: {
        component: "1.5rem",
        paragraph: "2rem",
        section: "4rem",
        page: "6rem",
      },
      colors: {
        off_white: "#F7FAFC",
        warm_white: "#FEFAF0",
        eggshell: "#FEFAF0",
        charcoal: "#121212",
        soft_black: "#1E1E1E",
        graphite: "#0F1624",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s forwards",
        "fade-out": "fadeOut 2s forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

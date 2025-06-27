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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["3rem", { lineHeight: "3.4rem" }],
        h2: ["2rem", { lineHeight: "2.4rem" }],
        body: ["1.5rem", { lineHeight: "1.9rem" }],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

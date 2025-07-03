module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
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
        shine: {
          "0%": { transform: "translateX(-100%) skewX(12deg)" },
          "100%": { transform: "translateX(400%) skewX(12deg)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s forwards",
        "fade-out": "fadeOut 2s forwards",
        shine: "shine 0.8s forwards",
      },
    },
  },
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        roboto: [
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
      aspectRatio: {
        calgaz: "1.31 / 1", // For calibration gas images
        "cert-eva": "588 / 857", // Eva certificate
        "cert-iso": "77 / 100", // ISO certificate
        "cert-panos": "27 / 40", // Panos certificate
        "cert-training": "1307 / 1000", // Training certificate
        // Gas detection instrument aspect ratios
        "inst-very-tall": "4 / 10", // ~0.4 ratio (very tall)
        "inst-tall": "1 / 2", // ~0.5 ratio (tall)
        "inst-portrait": "3 / 5", // ~0.6 ratio (portrait)
        "inst-portrait-wide": "7 / 10", // ~0.7 ratio (portrait)
        "inst-almost-square": "4 / 5", // ~0.8 ratio (portrait)
        "inst-square-tall": "9 / 10", // ~0.9 ratio (almost square)
        "inst-wide": "11 / 10", // ~1.1 ratio (wide)
        "inst-landscape": "14 / 10", // ~1.4 ratio (landscape)
        "inst-wide-landscape": "16 / 10", // ~1.6 ratio (wide landscape)
      },
      animation: {
        "fade-in": "fadeIn 2s forwards",
        "fade-out": "fadeOut 2s forwards",
        shine: "shine 0.8s forwards",
      },
    },
  },
};

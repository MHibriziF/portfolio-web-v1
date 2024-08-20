/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      spc: "924px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "axiom-pattern": "url('/src/assets/axiom-pattern.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        float: {
          "0%, 40%": { transform: "translateX(10px)" },
          "10%, 50%": { transform: "translateY(13px)" },
          "20%, 60%": { transform: "translateX(-10px)" },
          "30%, 100%": { transform: "translateY(-13px)" },
        },
        "bounce-less": {
          "0%, 100%": { transform: "translateY(-15%)" },
          "50%": { transform: "translateY(0)" },
        },
        rainbows: {
          "0%": { color: "#e81416" },
          "14%": { color: "#ffa500" },
          "29%": { color: "#faeb36" },
          "44%": { color: "#79c314" },
          "59%": { color: "#487de7" },
          "75%": { color: "#6f00fe" },
          "100%": { color: "#ad0afd" },
        },
      },
      animation: {
        floating: "float 15s linear infinite",
        "bounce-slow": "bounce-less 10s linear infinite",
        rainbow: "rainbows 10s linear infinite",
        "rainbow-fast": "rainbows 5s linear infinite",
      },
    },
  },
  plugins: [],
};

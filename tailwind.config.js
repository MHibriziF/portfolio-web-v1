/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    // Keep the custom `spc` breakpoint ordered by size so its variants keep
    // beating `md` and lose to `lg` instead of being emitted before `sm`.
    screens: {
      sm: defaultTheme.screens.sm,
      md: defaultTheme.screens.md,
      spc: "924px",
      lg: defaultTheme.screens.lg,
      xl: defaultTheme.screens.xl,
      "2xl": defaultTheme.screens["2xl"],
    },
    extend: {
      backgroundImage: {
        "axiom-pattern":
          "linear-gradient(rgb(23 23 23 / 0.45), rgb(23 23 23 / 0.45)), url('/src/assets/axiom-pattern.png')",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
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
        "fade-slide": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floating: "float 15s linear infinite",
        "bounce-slow": "bounce-less 10s linear infinite",
        rainbow: "rainbows 10s linear infinite",
        "rainbow-fast": "rainbows 5s linear infinite",
        "fade-slide": "fade-slide 400ms ease-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "axiom-pattern": "url('/src/assets/axiom-pattern.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateX(10px)" },
          "10%": { transform: "translateY(13px)" },
          "20%": { transform: "translateX(-10px)" },
          "30%": { transform: "translateY(-13px)" },
          "40%": { transform: "translateX(10px)" },
          "50%": { transform: "translateY(13px)" },
          "60%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateY(-13px)" },
        },
      },
      animation: {
        waving: "float 15s linear infinite",
      },
    },
  },
  plugins: [],
};

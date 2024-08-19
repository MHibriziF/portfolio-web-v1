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
          "0%, 40%": { transform: "translateX(10px)" },
          "10%, 50%": { transform: "translateY(13px)" },
          "20%, 60%": { transform: "translateX(-10px)" },
          "30%, 100%": { transform: "translateY(-13px)" },
        },
        "bounce-less": {
          "0%, 100%": {
            transform: "translateY(-15%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        floating: "float 15s linear infinite",
        "bounce-slow": "bounce-less 10s linear infinite",
      },
    },
  },
  plugins: [],
};

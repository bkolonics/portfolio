/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Platinum: "#DAE3E5",
        Glaucous: "#507DBC",
        "Columbia-blue": "#BBD1EA",
        "Powder-blue": "#A1C6EA",
        Jet: "#2A2B2A",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      borderWidth: {
        image: "15px",
        mobile: "10px",
      },
      borderRadius: {
        image: "3.50rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

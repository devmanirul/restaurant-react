/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#E1B168",
        black: "#292E36",
        slateMid: "#555555",
        lightBlack: "#343942",
        lightCream: "#FFF8F5",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        Cormorant: ["Cormorant Infant", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

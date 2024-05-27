/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        
      },
      colors: {
        "primary-txt": "#1F1F1F",
        "secondary-txt": "#4C4C4C",
        "dark-txt": "#FFFFF",
        "dark-txt-2": "#E6E6E6",
        "bg-white": "#F4F4F4",
        "bg-dark": "#2c2c2c",
        "bg-dark-2": "#061723",
        "primary-700": "#155177",
        "primary-600": '#3F708F',
        "primary-dark": "#DFE7EC",
        "yellow": "#F8BA10",

      },
    },
  },
  plugins: [flowbite.plugin(),],
};

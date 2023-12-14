/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "410px", min: "0px" },
      // => @media (max-width: 410px) { ... }

      md: { max: "620px", min: "410px" },
      // => @media (max-width: 620px) { ... }

      lg: { max: "910px", min: "620px" },
      // => @media (max-width: 910px) { ... }

      xl: { max: "1280px", min: "910px" },
      // => @media (max-width: 1280px) { ... }

      "2xl": { max: "1536px", min: "1280px" },
      // => @media (max-width: 1536px) { ... }
    },
  },
  plugins: [],
};

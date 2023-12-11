/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "410px", min: "0px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "620px", min: "410px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "910px", min: "620px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px", min: "910px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1536px", min: "1280px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountain: "url('https://i.ibb.co/8sqHwd8/landingpagebg.png')",
        manOnVan: "url('https://i.ibb.co/gmcnDx8/about.png')",
      },
    },
  },
  plugins: [],
};

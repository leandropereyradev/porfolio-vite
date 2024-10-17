/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
      gridTemplateColumns: {
        navbar: "30% 70%"
      },
      colors: {
        'principal': '#131313',
      },
    },
  },
  plugins: [],
};


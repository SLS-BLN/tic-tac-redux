/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "repeat(3, 120px)",
      },
      gridTemplateColumns: {
        layout: "repeat(3, 120px)",
      },
    },
  },
  plugins: [],
};

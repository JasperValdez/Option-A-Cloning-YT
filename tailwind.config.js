/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ytDark: "#0f0f0f",
        ytGray: "#272727",
        ytLightGray: "#aaaaaa",
      },
    },
  },
  plugins: [],
}

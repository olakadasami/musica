/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A4C7C6",
        "secondary": "#FACD66",
        "light": "#EFEEE0",
        "dark": "#1D2123",
        "dark-alt": "#1A1E1F",
      }
    },
  },
  plugins: [],
}

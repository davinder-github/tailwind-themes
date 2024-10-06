/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "var(--primaryBackground)",
        color:'var(--color)',
        buttonBg:'var(--buttonBackground)',
        buttonColor:'var(--buttonTextColor)',
        primary:'var(--primary)',
        secondary:'var(--secondary)'
      },
    },
  },
  plugins: [],
}


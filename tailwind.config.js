/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1440px',
      },
      colors: {
        'white': '#FFFFFF',
        'gray_01': '#A4ADAC',
        'gray_02': '#D6DBDB',
        'gray_03': '#E8EDEE',
        'gray_04': '#F2F6F6',
        'black': '#1D1D1B',
        'orange': '#FF5900',
        'dark_orange': '#E0570E',
        'error': '#FF4026',
      },
    },
  },
  plugins: [],
};

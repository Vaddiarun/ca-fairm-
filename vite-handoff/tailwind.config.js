/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:  { 950:"#04101F", 900:"#081A33", 800:"#0E2647", 700:"#143562", 600:"#1B4587" },
        brand: { DEFAULT:"#2E78E6", 700:"#1A5BC2", 600:"#2E78E6", 500:"#4A8EF0", 400:"#73AAF6" },
        teal:  { DEFAULT:"#10B981", 500:"#10B981", 400:"#34D399", 300:"#6EE7B7" },
        gold:  { DEFAULT:"#D9A441", 400:"#E2B45C", 300:"#EDC97E" },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

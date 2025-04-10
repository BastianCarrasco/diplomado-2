/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        // También puedes definir otras variantes si lo necesitas
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
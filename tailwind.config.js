/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel:  ['"Cinzel"', 'Georgia', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%':   { transform: 'translate(0%,0%) scale(1)' },
          '100%': { transform: 'translate(12%,-18%) scale(1.3)' },
        },
      },
    },
  },
  plugins: [],
}

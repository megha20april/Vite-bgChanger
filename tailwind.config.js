/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gray-500',
    'bg-rose-500',
    'bg-pink-500',
    'bg-fuchsia-500',
    'bg-cyan-500',
    'bg-green-500',
    'bg-lime-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-red-500'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


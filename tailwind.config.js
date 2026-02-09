/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#1f2937',
        secondary: '#f3f4f6',
      },
    },
  },
  plugins: [],
}

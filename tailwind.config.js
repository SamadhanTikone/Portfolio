/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'red': '0 4px 6px rgba(255, 0, 0, 0.5)',  // Red shadow
        'blue': '0 4px 6px rgba(0, 0, 255, 0.5)', // Blue shadow
        'custom': '0 10px 15px rgba(100, 0, 150, 0.7)', // Custom shadow
      },
    },
  },
  plugins: [],
}


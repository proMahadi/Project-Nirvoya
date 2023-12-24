/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1400px',
      },
      colors: {
        primary: '#0198E9',
        secondary: '#333333',
      },
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
    },
    boxShadow: {
      cat: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
    },
    // screens: {
    //   'xsm': '358px',
    // },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'madefor': ['"Wix Madefor Display"', 'sans-serif'],
      },

      colors: {
        'octo': {
          'green': {
            '100': '#F6FCD5',
            '500': '#EAFF6C',
            '900': '#474E21',
        },
          pink: '#D2ABE4',
        },
      },
    },
  },
  plugins: [],
}


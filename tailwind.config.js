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
  
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'base': '1105px',
      // => @media (min-width: 1105px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}


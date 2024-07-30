/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'bg': 'background-color',
      },
      colors: {
        customPurple: '#6f53ff',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '65%, 100%': { transform: 'translateY(0%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '65%, 100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slideUp: 'slideUp 1s',
        slideLeft: 'slideLeft 1.5s'
      }
    },
  },
  plugins: [],
}


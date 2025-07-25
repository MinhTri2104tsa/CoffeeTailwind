/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee':{
          50: 'E8D6D0',
          200:'#C89F94',
          400:'#A25F4B',
          600:'#744838',
        }

      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: '0' }, to: { opacity: '1' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      },
      backgroundImage: {
        'slider-coffee': "url('./img/favicon/slider_coffee.jpg')"
      }
    },
  },
  plugins: [],
}


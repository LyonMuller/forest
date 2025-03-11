/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem"
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui"],
        serif: ['"DM Serif Text"', "Georgia"],
      },
      colors: {
        verde: {
          200: '#ACEF75',
          300: '#91EE77',
          400: '#17E880',
          700: '#2E482C',
          800: '#16281F',
          900: '#0F1C15',
          950: '#030504',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        slideIn: {
          "0%": {
            opacity: 0,
            translate: "-20px 0"
          },
          "100%": {
            opacity: 1,
            translate: "0 0"
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn .4s ease-in-out forwards',
        slideIn: 'slideIn .4s ease-in-out forwards'
      }
    },
  },
  plugins: [plugin(({addUtilities}) => {
    function animationDelay(){
      const delays = {};
      for (let i = 0; i < 12; i++) {
        delays[`.animate-${i}`] = {
          "animation-delay": `${i * 100}ms`,
        }
      }
      return delays;
    }
    addUtilities(animationDelay)
  })],
}


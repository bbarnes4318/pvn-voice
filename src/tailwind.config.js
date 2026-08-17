/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f5fc',
          100: '#dde7f5',
          200: '#c1d4ef',
          300: '#97b9e4',
          400: '#6595d5',
          500: '#4177c3',
          600: '#2e5eaa',
          700: '#254b88',
          800: '#21406f',
          900: '#1e365c',
          950: '#14233d',
        },
        secondary: {
          50: '#e6f7ef',
          100: '#c3ebd7',
          200: '#9adebe',
          300: '#70d0a5',
          400: '#50c090',
          500: '#34ad79',
          600: '#289c6a',
          700: '#1e8a5a',
          800: '#16784c',
          900: '#105e3d',
          950: '#093d27',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'cta': '0 10px 25px -5px rgba(40, 156, 106, 0.5)',
      }
    },
  },
  plugins: [],
} 
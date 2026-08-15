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
        // Single blue family, derived from the logo navy (#003359 at navy-900).
        navy: {
          50: 'var(--pvn-navy-50)',
          100: 'var(--pvn-navy-100)',
          200: 'var(--pvn-navy-200)',
          300: 'var(--pvn-navy-300)',
          400: 'var(--pvn-navy-400)',
          500: 'var(--pvn-navy-500)',
          600: 'var(--pvn-navy-600)',
          700: 'var(--pvn-navy-700)',
          800: 'var(--pvn-navy-800)',
          900: 'var(--pvn-navy-900)',
          950: 'var(--pvn-navy-950)',
        },
        // Single green family, derived from the logo dot (#3cb26e at green-500).
        // Overrides Tailwind's default green so stray green-* classes cannot
        // reintroduce an off-brand hue.
        green: {
          50: 'var(--pvn-green-50)',
          100: 'var(--pvn-green-100)',
          200: 'var(--pvn-green-200)',
          300: 'var(--pvn-green-300)',
          400: 'var(--pvn-green-400)',
          500: 'var(--pvn-green-500)',
          600: 'var(--pvn-green-600)',
          700: 'var(--pvn-green-700)',
          800: 'var(--pvn-green-800)',
          900: 'var(--pvn-green-900)',
          950: 'var(--pvn-green-950)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        // Tinted to the CTA green (#2d8652).
        'cta': '0 10px 25px -5px rgba(45, 134, 82, 0.5)',
      }
    },
  },
  plugins: [],
}

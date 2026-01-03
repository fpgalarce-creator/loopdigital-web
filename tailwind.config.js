/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#e8f4ff',
          100: '#d3eaff',
          200: '#a6d4ff',
          300: '#75bbff',
          400: '#429cff',
          500: '#1f7fe8',
          600: '#1664b6',
          700: '#124f8c',
          800: '#0f3f70',
          900: '#0c3055',
        },
      },
      boxShadow: {
        soft: '0 10px 40px rgba(31, 127, 232, 0.12)',
        card: '0 20px 60px rgba(15, 63, 112, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 20% 20%, rgba(66,156,255,0.45), transparent 35%), radial-gradient(circle at 80% 30%, rgba(31,127,232,0.5), transparent 35%), linear-gradient(135deg, #0f3f70 0%, #1f7fe8 60%, #429cff 100%)',
      },
    },
  },
  plugins: [],
};

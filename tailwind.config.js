/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F0F0F0',
          200: '#999999',
          300: '#3c3c3c',
        },

        purple: '#5B1CE6',
        violet: '#9E86FF',
        black: '#0F0F0F',
        white: '#ffffff',
      },

      fontFamily: {
        sans: 'var(--font-sintony)',
      },

      backgroundImage: {
        blue: 'linear-gradient(308.16deg, #1400FF 15.36%, #72AAFF 84.52%)',
        'blue-alt':
          'linear-gradient(90.36deg, #4710C1 3.28%, #7857FF 50.58%, #819BFD 96.22%)',
        pink: ' linear-gradient(313.21deg, #FC00C4 16.17%, #FF8CE6 87.96%)',
      },

      fontSize: {
        xs: ['0.625rem', '0.813rem'],
        sm: ['0.875rem', '1.125rem'],
        base: ['1rem', '1.313rem'],
        lg: ['1.375rem', '1.813rem'],
        xl: ['2rem', '2.625rem'],
        '2xl': ['3rem', '3.938rem'],
      },
    },
  },
  plugins: [],
}

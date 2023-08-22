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
        'creme': 'rgba(250, 246, 241, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'creme': 'rgba(250, 246, 241, 1)',
        'green-pastel-light' : 'rgba(174, 193, 182, 1)',
        'green-pastel-dark': 'rgba(122, 153, 135, 1)',
        'text-green': 'rgba(50, 72, 58, 1)',
        'collor-link' : 'rgba(36, 127, 74, 1)',
        'green': 'rgba(201, 216, 208, 1)',
        'cancel': 'rgba(125, 16, 16, 1)',

      },
    },
  },
  plugins: [],
}

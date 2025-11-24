import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to your project files
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF0000',
        'brand-secondary': '#00FF00',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config

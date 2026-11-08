/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ethan: {
          bg: '#EBEEF2',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          sage: '#859787',
          'sage-hover': '#748776',
          'sage-dark': '#637665',
          'sage-banner': '#7F9281',
          'sage-soft': '#E8EFEA',
          'sage-tint': '#DFE8E1',
          dark: '#0A0E17',
          'dark-card': '#111726',
          'dark-footer': '#0D121F'
        },
        sage: {
          50: '#F4F7F5',
          100: '#E8EFEA',
          200: '#D3E0D6',
          300: '#B6CBB9',
          400: '#9BB49F',
          500: '#859787',
          600: '#6E8170',
          700: '#5A6B5C',
          800: '#475449',
          900: '#3A443B',
          950: '#1F2620',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'hud-spin': 'hud-spin-clockwise 50s linear infinite',
      }
    },
  },
  plugins: [],
}

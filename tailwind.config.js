/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
        mono: ['Fira Code', 'Share Tech Mono', 'monospace'],
        display: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#0d0d12',
        surface2: '#1a1a2e',
        primary: '#00ff41',
        accent: '#00d9ff',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}

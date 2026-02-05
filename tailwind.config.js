/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'chakra': ['Chakra Petch', 'sans-serif'],
      },
      animation: {
        'float': 'float 15s infinite linear',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 243, 255, 0.8)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-[-5deg]': 'rotateY(-5deg)',
        'x-[2deg]': 'rotateX(2deg)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function({ addUtilities }) {
      addUtilities({
        '.bg-grid-pattern': {
          'background-image': 'linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
          'background-size': '50px 50px',
        },
      })
    },
  ],
}
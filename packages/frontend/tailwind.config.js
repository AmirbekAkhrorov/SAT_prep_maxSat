/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Academic Palette
        navy: {
          50: '#f0f3f7',
          100: '#d9e1eb',
          200: '#b3c3d7',
          300: '#8da5c3',
          400: '#6787af',
          500: '#41699b',
          600: '#34547c',
          700: '#273f5d',
          800: '#1a2a3e',
          900: '#0f1e36', // Primary deep navy
          950: '#0a1424',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf5e0',
          200: '#f4e9bc',
          300: '#edd98f',
          400: '#e4c35e',
          500: '#d4a853', // Primary gold
          600: '#c9a227',
          700: '#a8831f',
          800: '#876820',
          900: '#6f561f',
          950: '#3f2f0e',
        },
        cream: {
          50: '#fdfcfb',
          100: '#f8f6f1', // Main background
          200: '#f0ebe0',
          300: '#e5dcc8',
          400: '#d4c5a5',
          500: '#c3ae82',
        },
        sage: {
          400: '#7eb07e',
          500: '#5a9a5a',
          600: '#4a8a4a',
        },
        coral: {
          400: '#e07a6c',
          500: '#d45a4a',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Source Serif 4', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 30, 54, 0.08)',
        'card-hover': '0 12px 40px -4px rgba(15, 30, 54, 0.12)',
        'button': '0 2px 8px -2px rgba(15, 30, 54, 0.15)',
        'button-hover': '0 4px 16px -2px rgba(15, 30, 54, 0.2)',
        'gold': '0 4px 20px -2px rgba(212, 168, 83, 0.3)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'radial-gold': 'radial-gradient(ellipse at top, rgba(212, 168, 83, 0.08) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.2s forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

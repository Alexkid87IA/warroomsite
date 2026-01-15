/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic colors - War Room design system
        'war': {
          'danger': {
            DEFAULT: 'rgb(239 68 68 / 0.2)',
            'border': 'rgb(239 68 68 / 0.5)',
            'text': 'rgb(252 165 165)',
            'solid': 'rgb(239 68 68)',
          },
          'success': {
            DEFAULT: 'rgb(16 185 129 / 0.2)',
            'border': 'rgb(16 185 129 / 0.5)',
            'text': 'rgb(110 231 183)',
            'solid': 'rgb(16 185 129)',
          },
          'warning': {
            DEFAULT: 'rgb(245 158 11 / 0.2)',
            'border': 'rgb(245 158 11 / 0.5)',
            'text': 'rgb(252 211 77)',
            'solid': 'rgb(245 158 11)',
          },
          'info': {
            DEFAULT: 'rgb(59 130 246 / 0.2)',
            'border': 'rgb(59 130 246 / 0.5)',
            'text': 'rgb(147 197 253)',
            'solid': 'rgb(59 130 246)',
          },
          'surface': {
            DEFAULT: 'rgb(30 41 59 / 0.3)',
            'elevated': 'rgb(30 41 59 / 0.5)',
            'border': 'rgb(51 65 85 / 0.5)',
            'solid': 'rgb(15 23 42)',
          },
        },
      },
      spacing: {
        'sidebar': '280px',
        'sidebar-collapsed': '72px',
      },
      transitionProperty: {
        'sidebar': 'width, padding, margin',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

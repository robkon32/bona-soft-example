import { type Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.04em' }],
        '3xs': ['0.7rem', { lineHeight: '1rem', letterSpacing: '0.03em' }],
        '4xs': ['0.62rem', { lineHeight: '0.7rem', letterSpacing: '0.03em' }]
      }
    }
  },
  plugins: []
} satisfies Config

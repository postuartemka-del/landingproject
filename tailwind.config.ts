import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#22223a',
        },
        accent: {
          DEFAULT: '#6c5ce7',
          light: '#a29bfe',
          dark: '#5a4bd1',
        },
        neon: {
          green: '#00e676',
          blue: '#00b0ff',
          pink: '#f50057',
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #6c5ce7 0%, #00b0ff 50%, #00e676 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(108,92,231,0.1) 0%, rgba(0,176,255,0.05) 100%)',
        'gradient-hero': 'radial-gradient(ellipse at 50% 0%, rgba(108,92,231,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108,92,231,0.3), 0 0 10px rgba(108,92,231,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(108,92,231,0.5), 0 0 40px rgba(108,92,231,0.3)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
import type { Config } from 'tailwindcss'

const config = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
   ],
   prefix: '',
   theme: {
      extend: {
         colors: {
            background: '#fff',
            foreground: '#828282',
            mainRed: '#D63626',
            mainBlack: '#181617',
            mainOrange: '#FB9300',
            'normal-red': '#EB5757',
            'gray-7': '#F3F4F6',
            "gray-2": '#4F4F4F',
            'light-red': '#FFE7E7',
            'light-pink': '#C74FEB',
            'dark-pink': '#C035A2'
         },
         keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            wiggleMore: {
               '0%, 100%': { transform: 'rotate(-3deg)' },
               '50%': { transform: 'rotate(3deg)' },
             },
             'fade-down': {
               '0%': {
                 transform: 'translateY(-10px)',
                 opacity: '0',
               },
               '100%': {
                 transform: 'translateY(0)',
                 opacity: '1',
               }, 
             },
             wiggle: {
               '0%, 100%': { transform: 'rotate(0deg)' },
               '50%': { transform: 'rotate(15deg)' },
             },
             'fade-in-down': {
                '0%': {
                  opacity: '0',
                  transform: 'translateY(-10px)'
                },
                '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
                },
             },
             'rotate-hover': {
               '0%, 100%': {
                 transform: 'rotate(0deg)',
               },
               '50%': {
                 transform: 'rotate(12deg)',
               },
             },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            'wiggle-more': 'wiggleMore 1s ease-in-out infinite',
            'fade-down': 'fade-down 0.5s ease-in-out',
            'fade-in-down': 'fade-in-down 0.5s ease-out',
            'rotate-hover': 'rotate-hover 0.3s ease-in-out',
            wiggle: 'wiggle 1s ease-in-out forwards',
          },
      }
   },
   plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config

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
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
      }
   },
   plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config

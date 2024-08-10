import localFont from 'next/font/local'

export const roboto = localFont({
  src: [
    {
      path: './Roboto-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Roboto-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './Roboto-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap'
})

// import { Roboto, Mukta, Open_Sans, Montserrat } from "next/font/google";
// import { Roboto } from 'next/font/google'

// const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })
// const mukta = Mukta({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
// const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] })
// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '800', '900'] })

// export { roboto, mukta, openSans, montserrat }
// export { roboto }

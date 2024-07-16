import { Roboto, Mukta, Open_Sans, Montserrat } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })
const mukta = Mukta({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '800', '900'] })

export { roboto, mukta, openSans, montserrat }

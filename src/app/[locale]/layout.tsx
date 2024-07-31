import Provider from '@providers/Provider'
import Footer from '@sections/Footer/Footer'
import Header from '@sections/Header/Header'
import { roboto } from '@settings/fonts'
import '@styles/index.scss'
interface IRootLayout {
  params: { locale: string }
  children: React.ReactNode
}
export const dynamic = 'force-dynamic'

export default function RootLayout({ children, params: { locale } }: IRootLayout) {
  return (
    <html lang={locale}>
      <body className={`${roboto.className}`}>
        <Provider>
          <div className={`wrapper`}>
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}

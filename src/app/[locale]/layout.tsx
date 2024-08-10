import Provider from '@providers/Provider';
import Footer from '@sections/Footer/Footer';
import Header from '@sections/Header/Header';
import { roboto } from '@settings/fonts';
import '@styles/index.scss';
import { Toaster } from '@ui/toaster';
import TopLoadingBar from '../../components/TopLoadingBar';

interface IRootLayout {
  params: { locale: string };
  children: React.ReactNode;
}

export const dynamic = 'force-dynamic';

export default function RootLayout({ children, params: { locale } }: IRootLayout) {
  return (
    <html lang={locale}>
      <body className={`${roboto.className}`}>
        <Provider>
          <TopLoadingBar />
          <div className={`wrapper`}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </div>
        </Provider>
      </body>
    </html>
  );
}

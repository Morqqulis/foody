import { roboto } from "@settings/fonts";
import "@styles/index.scss";
import Header from "@sections/Header/Header";
import Footer from "@sections/Footer/Footer";
import Provider from "@providers/Provider";

interface IRootLayout {
  params: { locale: string };
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  params: { locale },
}: IRootLayout) {
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Provider>
          <div className={`wrapper`}>
            <Header />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
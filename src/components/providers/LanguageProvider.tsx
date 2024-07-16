import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

interface ILangProvider {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<ILangProvider> = async ({
  children,
}: ILangProvider): Promise<JSX.Element> => {
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LanguageProvider;

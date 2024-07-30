import LanguageProvider from "./LanguageProvider";

interface IProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: IProvider): JSX.Element => {
  return (
    <>
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
};

export default Provider;

import LanguageProvider from './LanguageProvider'

interface IProvider {
  children: React.ReactNode
}

const Provider = ({ children }: IProvider): JSX.Element => {
  return (
    <LanguageProvider>
      {/* @ts-ignore */}
      {children}
    </LanguageProvider>
  )
}

export default Provider

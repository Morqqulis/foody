import LanguageProvider from './LanguageProvider'
import QueryProvider from './QueryProvider'

interface IProvider {
  children: React.ReactNode
}

const Provider = ({ children }: IProvider): JSX.Element => {
  return (
    <LanguageProvider>
      {/* @ts-ignore */}
      <QueryProvider>{children}</QueryProvider>
    </LanguageProvider>
  )
}

export default Provider

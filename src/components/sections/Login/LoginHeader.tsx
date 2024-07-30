import HeaderLanguages from '@sections/Header/HeaderLangs'
import Logo from '@ui/Logo'

interface ILoginHeader {}

const LoginHeader: React.FC<ILoginHeader> = (): JSX.Element => {
  return (
    <header>
      <div className={`container flex w-full items-center justify-between gap-2.5`}>
        <Logo color={'white'} />
        <HeaderLanguages />
      </div>
    </header>
  )
}

export default LoginHeader

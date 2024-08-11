import HeaderLanguages from '@sections/Header/HeaderLangs'
import Logo from '@ui/Logo'

interface ILoginHeader {}

const LoginHeader: React.FC<ILoginHeader> = (): JSX.Element => {
  return (
    <header className={`mt-[30px]`}>
      <div className={`container`}>
        <div className={`w-full items-center flex justify-between gap-2.5 bg-[rgb(235_87_87)] p-[35px]`}>
          <Logo color={'white'} />
          <HeaderLanguages />
        </div>
      </div>
    </header>
  )
}

export default LoginHeader

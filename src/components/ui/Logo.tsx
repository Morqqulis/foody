import Link from 'next/link'

interface ILogo {
  color: 'black' | 'white'
  className?: string
}

const Logo: React.FC<ILogo> = ({ color, className }: ILogo): JSX.Element => {
  return (
    <Link className={`text-[2.25rem] font-extrabold leading-6 ${color === 'black' ? 'text-black' : 'text-[#F5F5F5]'} ${className || ''}`} href={'/'}>
      Foody
      <span className={`${color === 'black' ? 'text-mainRed' : 'text-[#EAAB00]'}`}>.</span>
    </Link>
  )
}

export default Logo

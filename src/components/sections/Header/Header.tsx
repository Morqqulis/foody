'use client'

import DrapDown from '@sections/DrapDown/DrapDown'
import { Link, usePathname } from '@settings/navigation'
import Logo from '@ui/Logo'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import HeaderBasket from './HeaderBasket'
import HeaderInput from './HeaderInput'
import HeaderLanguages from './HeaderLangs'
import HeaderMenu from './HeaderMenu'
import LoginHeader from '@sections/Login/LoginHeader'
interface IHeader {
  className?: string
}

const Header: React.FC<IHeader> = ({ className }: IHeader): JSX.Element => {
  const path = usePathname()

  const t = useTranslations('Header')
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (token != '') setUserId(token)

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      setUserId(updatedToken)
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  if (path === '/login') return <LoginHeader />

  return (
    <header className={`mt-[30px] ${className} ${path.startsWith('/admin') ? 'hidden' : 'block'} `}>
      <div className={`container`}>
        <nav className={`flex w-full items-center justify-around gap-2.5 rounded-t bg-gray-7 py-10`}>
          <Logo className={'mr-8'} color={'black'} />
          <HeaderMenu className={``} />
          <HeaderInput className={`mr-8 w-full ${path == '/login' && 'hidden'}`} />

          <div className={`flex items-center gap-2.5`}>
            <HeaderLanguages />

            {userId === null ? (
              <Link
                className={`flex max-w-[115px] items-center justify-center rounded-full bg-mainRed px-5 py-2 text-center text-sm font-medium tracking-widest text-white`}
                href={'/login'}
              >
                {t('signUp')}
              </Link>
            ) : (
              <>
                <HeaderBasket />
                <DrapDown />
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

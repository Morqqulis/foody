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
interface IHeader {
  className?: string
}

const Header: React.FC<IHeader> = ({ className }: IHeader): JSX.Element => {
  const path = usePathname()
  const t = useTranslations('Header')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (!token) return

    setUserId(token)
  }, [])

  return (
    <header className={`${className || ''} ${path.startsWith('/admin') ? 'hidden' : 'block'} `}>
      <div className={`container`}>
        <nav
          className={`flex w-full items-center  gap-2.5 rounded bg-gray-7 py-10 ${path === '/login' ? 'mt-[30px] justify-between bg-[rgb(235_87_87)] p-[35px]' : 'justify-around'}`}
        >
          <Logo className={'mr-8'} color={path === '/login' ? 'white' : 'black'} />
          <HeaderMenu className={`mr-10 ${path == '/login' && 'hidden'}`} />
          <HeaderInput className={`mr-8 w-full ${path == '/login' && 'hidden'}`} />

            <div className={`flex  items-center gap-2.5`}>
              <HeaderLanguages />

              {!userId ? (
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

'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@settings/navigation'

interface IHeaderNavigation {
  id: number
  label: string
  href: string
}

const headerNavigation: IHeaderNavigation[] = [
  {
    id: 0,
    label: 'Home',
    href: '/'
  },
  {
    id: 1,
    label: 'Restaurants',
    href: '/restaurants'
  },
  {
    id: 2,
    label: 'About Us',
    href: '/about-us'
  },
  {
    id: 3,
    label: 'How it works',
    href: '/how-it-works'
  },
  {
    id: 4,
    label: 'FAQs',
    href: '/faqs'
  }
]

interface IHeaderMenu {
  className?: string
}

const HeaderMenu: React.FC<IHeaderMenu> = ({ className }: IHeaderMenu): JSX.Element => {
  const t = useTranslations('Header.menu')
  const path = usePathname()

  return (
    <ul className={`flex items-center ${className || ''}`}>
      {headerNavigation.map((item) => (
        <li key={item.id} className={`w-full`}>
          <Link
            className={`block whitespace-nowrap px-3 text-lg font-medium hover:text-mainRed ${path === item.href ? 'text-mainRed' : 'text-foreground'}`}
            href={item.href}
          >
            {t(`${item.id}`)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HeaderMenu

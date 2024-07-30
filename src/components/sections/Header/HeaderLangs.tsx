'use client'

import { locales, useRouter } from '@settings/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@ui/dropdown-menu'

import { useLocale } from 'next-intl'
import Image from 'next/image'

const iconStyles = 'lg:min-w-10 lg:min-h-10 min-w-8 min-h-8 rounded-full group-hover/langItem:scale-110'

interface IHeaderLangs {
  className?: string
}

const HeaderLanguages: React.FC<IHeaderLangs> = ({ className }: IHeaderLangs): JSX.Element => {
  const currentLocale = useLocale()
  const router = useRouter()

  const handleClick = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    router.refresh()
  }

  const lastLocales = locales.filter((locale) => locale !== currentLocale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`group/langItem`}>
        {currentLocale && <Image className={iconStyles} src={`/Header/langs/${currentLocale}.svg`} width={40} height={40} alt={`${currentLocale}`} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`flex w-fit min-w-fit flex-col items-center justify-center`}>
        {lastLocales.map((item) => (
          <DropdownMenuItem
            className={`group/langItem flex w-fit cursor-pointer items-center justify-center`}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item && <Image className={iconStyles} src={`/Header/langs/${item}.svg`} width={40} height={40} alt={`${item}`} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderLanguages

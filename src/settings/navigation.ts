import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'ru', 'az'] as const
export const localePrefix = 'never'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix })

'use client'
import { useTranslations } from 'next-intl'
import AsideElement from './AsideElement'
import { ListChecks, ListOrdered, LogOut, ShoppingBasket, UsersRound } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

type IAsideElements = {
  id: number
  icon: JSX.Element
  href: string
}

const UserAside: React.FC = (): JSX.Element => {
  const path = usePathname()
  const router = useRouter()
  const AsideElements: IAsideElements[] = [
    {
      id: 0,
      icon: <UsersRound className={`${path === '/user' && 'text-red-600'}`} />,
      href: '/user'
    },
    {
      id: 1,
      icon: <ShoppingBasket className={`${path === '/user/basket' && 'text-red-600'}`} />,
      href: '/user/basket'
    },
    {
      id: 2,
      icon: <ListOrdered className={`${path === '/user/orders' && 'text-red-600'}`} />,
      href: '/user/orders'
    },
    {
      id: 3,
      icon: <ListChecks className={`${path === '/user/checkout' && 'text-red-600'}`} />,
      href: '/user/checkout'
    },
    {
      id: 4,
      icon: <LogOut />,
      href: '/login'
    }
  ]
  const t = useTranslations('User.Aside.title')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (!token) router.push('/login')

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      if (!updatedToken) router.push('/login')
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [router])

  return (
    <aside className="h-[515px] w-[325px]  rounded-md bg-[#f3f4f6] pl-[35px] pr-[53px] pt-[45px]">
      {AsideElements.map((element) => (
        <AsideElement key={element.id} element={element} title={t(`${element.id}`)} whatIs="user" />
      ))}
    </aside>
  )
}

export default UserAside

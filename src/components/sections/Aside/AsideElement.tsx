'use client'
import { collections, databases, dbId } from '@libs/appwrite/config'
import { usePathname } from '@settings/navigation'
import Link from 'next/link'
import { FC } from 'react'

type AsideElements = {
  element: {
    icon: JSX.Element
    mt?: string
    href: string
  }
  title: string
  whatIs: string
}

const AdminAsideElement: FC<AsideElements> = ({ element, title, whatIs }): JSX.Element => {
  const path = usePathname()

  function asideElementAction() {
    if (whatIs === 'user' && element.href === '/login') {
      ;(async () => await databases.updateDocument(dbId, collections.userId, localStorage.getItem('userId'), { enter: false }))()
      localStorage.removeItem('userId')
    }
    if (whatIs === 'admin' && element.href === '/admin/login') {
      localStorage.removeItem('admin')
    }
  }

  return (
    <Link
      className={`mb-[8px] flex h-[40px] w-[200px] cursor-pointer items-center gap-[26px] pl-[18px] ${path === element.href && ((whatIs === 'admin' && 'bg-[#d578f2] ') || (whatIs === 'user' && 'bg-[#ffb6af] hover:bg-[#ffb6af]'))} ${whatIs.startsWith('admin') ? 'hover:bg-[#d578f2]' : 'hover:bg-[#ffb6af]'}`}
      onClick={asideElementAction}
      href={element.href}
    >
      {element.icon}
      <p
        className={`h-[18px] w-[138px]  text-sm font-medium leading-[21px]   ${whatIs === 'admin' ? 'text-[#F2F2F2DE]' : 'text-[#828282]'} ${path === element.href && whatIs === 'user' && 'text-[red]'}`}
      >
        {title}
      </p>
    </Link>
  )
}

export default AdminAsideElement

'use client'
import { useTranslations } from 'next-intl'
import AsideElement from './AsideElement'
import { usePathname } from 'next/navigation'
import { ClipboardList, History, LayoutDashboard, ListOrdered, LogOut, Percent, SquareStack, Store } from 'lucide-react'
type IAsideElements = {
  id: number
  icon: JSX.Element
  href: string
  mt?: string
}

const AsideElements: IAsideElements[] = [
  {
    id: 0,
    icon: <LayoutDashboard className="text-[#F2F2F2DE]" />,
    href: '/admin'
  },
  {
    id: 1,
    icon: <Store className="text-[#F2F2F2DE]" />,
    href: '/admin/products'
  },
  {
    id: 2,
    icon: <ClipboardList className="text-[#F2F2F2DE]" />,
    href: '/admin/restaurants'
  },
  {
    id: 3,
    icon: <SquareStack className="text-[#F2F2F2DE]" />,
    href: '/admin/category'
  },
  {
    id: 4,
    icon: <ListOrdered className="text-[#F2F2F2DE]" />,
    href: '/admin/orders'
  },
  {
    id: 5,
    icon: <History className="text-[#F2F2F2DE]" />,
    href: '/admin/order-history'
  },
  {
    id: 6,
    icon: <Percent className="text-[#F2F2F2DE]" />,
    href: '/admin/offers'
  },
  {
    id: 7,
    icon: <LogOut className="text-[#F2F2F2DE]" />,
    href: '/admin/login',
    mt: 'mt-[20px] '
  }
]
interface IAdminAside {
  className?: string
}
const AdminAside: React.FC<IAdminAside> = ({ className }): JSX.Element => {
  const t = useTranslations('Admin.Aside.title')
  const pasthname = usePathname()

  return (
    <aside
      className={`flex h-full max-h-[50%] min-h-[474px] w-full basis-[256px] flex-col md:items-center rounded-[14px] bg-[#C74FEB] py-[24px] ${className} ${pasthname.startsWith('/admin/login') ? 'hidden' : 'flex'}`}
    >
      <nav>
        {AsideElements.map((element) => (
          <AsideElement whatIs="admin" key={element.id} element={element} title={t(`${element.id}`)} />
        ))}
      </nav>
    </aside>
  )
}

export default AdminAside

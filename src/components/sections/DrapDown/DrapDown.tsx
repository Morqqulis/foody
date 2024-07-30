import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../../ui/dropdown-menu'
import Image from 'next/image'
import { account } from '@libs/appwrite/config'
// import { headerUserData } from "@data/data";
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface IHeaderUserData {
  id: number
  //   label: string;
  path: string
}
const headerUserData: IHeaderUserData[] = [
  {
    id: 0,
    // label: "Profile",
    path: '/user'
  },
  {
    id: 1,
    // label: "Your Basket",
    path: '/user/basket'
  },
  {
    id: 2,
    // label: "Your Orders",
    path: '/user/orders'
  },
  {
    id: 3,
    // label: "Checkout",
    path: '/user/checkout'
  },
  {
    id: 4,
    // label: "Logout",
    path: '/'
  }
]

const DrapDown: React.FC = () => {
  const t = useTranslations('Header.dropdown')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={'text-black'}>
        <Image
          className={`h-auto min-w-[50px]`}
          src={'/Header/profileIcon.png'}
          width={60}
          height={40}
          alt="Icon"
          style={{ width: '60px', height: '40px' }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`flex flex-col px-5 py-5`}>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        {headerUserData.map(({ id, path }) => (
          <DropdownMenuItem key={id} className="w-full cursor-pointer border-b border-b-gray-7 py-2 text-base text-black last:border-b-0">
            <Link href={path}>{t(`${id}`)}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DrapDown

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu'
import Image from 'next/image'
import { collections, databases, dbId } from '@libs/appwrite/config'
import { useTranslations } from 'next-intl'
import { useRouter } from '@settings/navigation'

interface IHeaderUserData {
  id: number
  path: string
}
const headerUserData: IHeaderUserData[] = [
  {
    id: 0,
    path: '/user'
  },
  {
    id: 1,
    path: '/user/basket'
  },
  {
    id: 2,
    path: '/user/orders'
  },
  {
    id: 3,
    path: '/user/checkout'
  },
  {
    id: 4,
    path: '/'
  }
]

const DrapDown: React.FC = () => {
  const t = useTranslations('Header.dropdown')
  const router = useRouter()
  const handleClick = (path: string) => {
    const userId = localStorage.getItem('userId')
    if (path === '/') {
      ;(async () => {
        await databases.updateDocument(dbId, collections.userId, userId, { enter: false })
        localStorage.removeItem('userId')
      })()
    }

    router.push(path)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={'text-black'}>
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
        {headerUserData.map(({ id, path }) => (
          <DropdownMenuItem
            key={id}
            className="w-full cursor-pointer border-b border-b-gray-7 py-2 text-base text-black last:border-b-0"
            onSelect={() => handleClick(path)}
          >
            {t(`${id}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DrapDown

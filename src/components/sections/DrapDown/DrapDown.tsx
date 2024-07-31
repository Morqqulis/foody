"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../ui/dropdown-menu'
import Image from 'next/image'
import { collections, databases, dbId } from '@libs/appwrite/config'
import { useTranslations } from 'next-intl'
import { useRouter } from '@settings/navigation'
import { useEffect, useState } from 'react'
import { getDocuments } from '../../../utls/functions'

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
  const [fullName, setFullName] = useState("")
  const [avatar, setAvatar] = useState("")

  const userId = localStorage.getItem('userId')
  const handleClick = (path: string) => {
    if (path === '/') {
      ;(async () => {
        await databases.updateDocument(dbId, collections.userId, userId, { enter: false })
        localStorage.removeItem('userId')
      })()
    }

    router.push(path)
  }

  useEffect(()=>{
    if(userId){
      (async()=>{
        const user = await getDocuments(collections.userId, userId)
        const userAllData = JSON.parse(user.userInfo)
        setFullName(userAllData.fullName)
        setAvatar(userAllData.avatar)
      })()
    }
  },[userId])

  console.log(fullName, avatar);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={'text-black mr-1 cursor-pointer'}>
        {avatar ? 
        <Image
          className={`h-auto min-w-10 rounded-full`}
          src={avatar}
          width={40}
          height={40}
          alt="Icon"
          style={{ width: '40px', height: '40px' }}
        /> : <div className='w-10 h-10 rounded-full bg-mainRed flex justify-center items-center '>
          <p className=' font-bold text-2xl text-white'>{fullName.charAt(0).toUpperCase()}</p>
        </div>
        }
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

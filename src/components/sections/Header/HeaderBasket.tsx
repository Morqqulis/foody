'use client'

import Link from 'next/link'
import { IconBasket } from '../../icons'
import { useEffect, useState } from 'react'
import { getDocuments, subscribeToCollection } from '../../../utls/functions'
import { client, collections, databases, dbId, Query } from '@libs/appwrite/config'

const HeaderBasket: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (!token) return

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      if (!updatedToken) return
    }

    ;(async () => {
      const userdata = await getDocuments(collections.userId, token)

      if (!userdata) return
      setCount(JSON.parse(userdata.basket.productsList).length)
console.log(userdata);

      client.subscribe(`databases.${dbId}.collections.${collections?.basketId}.documents.${userdata?.basket?.$id}`, (res: any) => {
        if (res.payload) setCount(JSON.parse(res.payload.productsList).length)
      })
      //   unsubscribe()
      //   return () => unsubscribe()

      window.addEventListener('storage', handleStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
      }
    })()
  }, [])

  return (
    <Link className={`relative`} href={'/user/basket'}>
      <IconBasket />
      <span className="absolute right-[-11px] top-[-13px] font-bold text-red-600">{count}</span>
    </Link>
  )
}

export default HeaderBasket

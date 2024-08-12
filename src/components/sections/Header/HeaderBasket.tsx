'use client'

import Link from 'next/link'
import { IconBasket } from '../../icons'
import { useEffect, useState } from 'react'
import { getDocuments, subscribeToCollection } from '../../../utls/functions'
import { client, collections, databases, dbId, Query } from '@libs/appwrite/config'

interface IHeaderBasket {}

const HeaderBasket: React.FC = (): JSX.Element => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (!token) return
    ;(async () => {
      const userdata = await getDocuments(collections.userId, token)
      setCount(JSON.parse(userdata.basket.productsList).length)

      client.subscribe(`databases.${dbId}.collections.${collections.basketId}.documents.${userdata.basket.$id}`, async (res: any) => {
        setCount(JSON.parse(res.payload.productsList).length)
      })
    })()
  }, [])

  return (
    <Link className={`relative`} href={'/user/basket'}>
      <IconBasket />
      <p className="absolute right-[-15px] top-[-15px] font-bold text-red-600">{count}</p>
    </Link>
  )
}

export default HeaderBasket

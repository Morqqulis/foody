'use client'
import { useEffect, useState } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'
import { collections, databases, dbId, ID } from '@libs/appwrite/config'
import { getDocuments } from '../../../utls/functions'
import LoadingAnimation from '@ui/LoadingAnimation'

interface IproductsSection {
  restId: string
}

const RestoranItems: React.FC<IproductsSection> = ({ restId }): JSX.Element => {
  const [basket, setBasket] = useState([])
  const [basketId, setBasketId] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    setUserId(token || '')

    if (!userId) return
    ;(async () => {
      const user = await getDocuments(collections.userId, userId)

      if (user.basket) {
        setBasketId(user.basket.$id)
        const prevBasket = user.basket.productsList
        console.log(prevBasket)

        prevBasket ? setBasket(JSON.parse(prevBasket)) : setBasket([])
      }
    })()
  }, [userId])

  useEffect(() => {
    if (basket && userId) {
      const strBasket = JSON.stringify(basket)

      ;(async () => {
        if (basketId) {
          await databases.updateDocument(dbId, collections.basketId, basketId, { productsList: strBasket })
        } else {
          if (basket.length > 0) {
            const newBasket = await databases.createDocument(dbId, collections.basketId, ID.unique(), { user: userId, productsList: strBasket })
            setBasketId(newBasket.$id)
          }
        }
      })()
    }
  }, [basket, userId, basketId])

  return (
    <div className="flex pb-20 pt-6">
      <ProductList restId={restId} setBasket={setBasket} />
      <Cart setBasket={setBasket} initialCartItems={basket} />
    </div>
  )
}

export default RestoranItems

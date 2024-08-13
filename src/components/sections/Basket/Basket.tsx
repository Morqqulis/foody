'use client'
import { collections, databases, dbId } from '@libs/appwrite/config'
import LoadingAnimation from '@ui/LoadingAnimation'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getDocuments } from '../../../utls/functions'
import styles from './basket.module.css'
const Basket = () => {
  const [basket, setBasket] = useState([])
  const [basketId, setBasketId] = useState('')
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(true)
  const t = useTranslations('Basket')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (token !== '') setUserId(token)

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      setUserId(updatedToken)
    }
    window.addEventListener('storage', handleStorageChange)

    if (!userId) return
    ;(async () => {
      const user = await getDocuments(collections.userId, userId)
      const basketIdinUser = user.basket && (await user.basket.$id)

      if (basketIdinUser) {
        setBasketId(basketIdinUser)
        const prevBasket = user.basket.productsList
        prevBasket ? setBasket(JSON.parse(prevBasket)) : setBasket([])
      }

      setLoading(false)
    })()

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [userId])

  useEffect(() => {
    if (basket && basketId) {
      const strBasket = JSON.stringify(basket)
      ;(async () => await databases.updateDocument(dbId, collections.basketId, basketId, { productsList: strBasket }))()
    }
  }, [basket, basketId])

  const incrementQuantity = (id: string) => {
    setBasket((prevItems) => prevItems.map((item) => (item.$id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }
  const decrementQuantity = (id: string) => {
    setBasket((prevItems) => prevItems.map((item) => (item.$id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)))
  }
  const handleDelete = (id: string) => {
    setBasket((prevItems) => prevItems.filter((item) => item.$id !== id))
  }
  const totalAmount = basket.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
  return loading ? (
    <LoadingAnimation className="" width={200} height={200} />
  ) : (
    <section>
      <div className="h-full w-full bg-gray-100">
        <div className="flex min-h-[735px] w-full flex-col p-10">
          <div className="mb-6 flex flex-col pb-0">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-gray-950">{t('title')}</h1>
            </div>
            <div className="mt-2 flex items-center">
              <ShoppingCart className="h-5 w-5 text-red-600" />
              <h5 className="ml-2 font-medium text-red-600">
                {basket.length} {t('items')}
              </h5>
            </div>
          </div>
          <div className={`${styles.customScrollbar} h-full grow overflow-y-auto`}>
            {basket.map((item) => (
              <div
                key={item.$id}
                className="mb-4 flex items-center justify-between border-t border-gray-300 pt-6 last:border-b last:pb-6  hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Image className="h-20 w-20" src={item.image} alt={item.name} width={80} height={80} />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${Number(item.price).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => incrementQuantity(item.$id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-300"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => decrementQuantity(item.$id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-300"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(item.$id)}
                    className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-gray-300"
                  >
                    <Trash2 className="h-5 w-5 text-red-600 hover:text-red-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/user/checkout"
            className="mt-4 flex items-center justify-between rounded-full bg-red-600 p-4 shadow-md transition-transform hover:scale-105"
          >
            <div className="rounded-lg bg-red-600 px-4 py-2 text-white">{t('checkout')}</div>
            <span className="rounded-3xl bg-white px-4 py-2 text-xl font-semibold text-red-600">$ {totalAmount.toFixed(2)}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Basket

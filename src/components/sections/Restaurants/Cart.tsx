'use client'

import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import styles from './Scroll.module.css'

interface CartItem {
  $collectionId: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  name: string
  price: string | number
  quantity: number
  image: string
  imageId: string
  $databaseId: string
  $id: string
  $tenant: string
  description: string
}

interface IBasket {
  initialCartItems: CartItem[]
  setBasket: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Cart: FC<IBasket> = ({ initialCartItems, setBasket }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const t = useTranslations('Basket')

  useEffect(() => {
    setCartItems(initialCartItems)
  }, [initialCartItems])

  const incrementQuantity = (id: string) => {
    setBasket((prevItems) => prevItems.map((item) => (item.$id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrementQuantity = (id: string) => {
    setBasket((prevItems) => prevItems.map((item) => (item.$id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)))
  }

  const handleDelete = (id: string) => {
    setBasket((prevItems) => prevItems.filter((item) => item.$id !== id))
  }

  const totalPrice = cartItems?.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)

  return (
    <div className="mt-4 flex h-[550px] w-full basis-2/5 animate-fade-in">
      <div className="h-[547px] mb-8 flex w-full flex-col bg-gray-7 p-4">
        <div className="mb-6 flex flex-col ">
          <div className="mt-2 flex items-center text-xl">
            <ShoppingCart className="h-7 w-7 text-red-600 " />
            <h5 className="ml-2 text-red-600">
              {cartItems?.length} {t('items')}
            </h5>
          </div>
        </div>
        <div className={`${styles.customScrollbar} grow overflow-auto`}>
          {!cartItems?.length && (
            <div className={`flex h-full w-full flex-col items-center justify-center gap-2`}>
              <Image className={`w-full max-w-[150px]`} src={'/Basket/empty-small.png'} alt={'empty basket'} width={263} height={236} />
              <span className={`text-center text-4xl font-medium`}>
                Oops! <br /> Basket empty
              </span>
            </div>
          )}

          {cartItems?.map((item) => (
            <div key={item.$id} className="mb-4 flex items-center justify-between rounded-lg bg-white p-1 shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center">
                <Image className="h-20 w-20 rounded-lg" src={item.image} alt={item.name} width={50} height={50} />
                <div className="ml-4">
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => incrementQuantity(item.$id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-transform duration-300 hover:bg-gray-300 hover:scale-110"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => decrementQuantity(item.$id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 transition-transform duration-300 hover:bg-gray-300 hover:scale-110"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(item.$id)}
                  className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-transform duration-300 hover:bg-gray-300 hover:scale-110"
                >
                  <Trash2 className="h-5 w-5 text-red-600 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/user/checkout"
          className="flex items-center justify-between rounded-full bg-red-600 p-4 shadow-md transition-transform duration-300 hover:scale-105"
        >
          <div className="rounded-lg bg-red-600 px-4 py-2 text-white">{t('checkout')}</div>
          <span className="rounded-3xl bg-white px-4 py-2 text-xl font-semibold text-red-600">$ {totalPrice}</span>
        </Link>
      </div>
    </div>
  )
}

export default Cart

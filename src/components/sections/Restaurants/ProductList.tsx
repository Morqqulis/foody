'use client'
import { collections } from '@libs/appwrite/config'
import { Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Scroll.module.css'
import { getDocuments } from '../../../utls/functions'
import { toast } from '@ui/use-toast'

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

interface IProductList {
  restId: string
  setBasket: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const ProductList: React.FC<IProductList> = ({ restId, setBasket }) => {
  const t = useTranslations('ProductList')
  const [products, setProducts] = useState([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const id = localStorage.getItem('userId') || ''
    if (!id) return
    setUserId(id)
  }, [userId])

  useEffect(() => {
    ;(async () => {
      try {
        const { products } = await getDocuments(collections.restaurantsId, restId)
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [restId])

  const addToBasket = (product: CartItem) => {
    if (userId) {
      setBasket((prev: any) =>
        prev?.some((item: any) => item.$id === product.$id)
          ? prev.map((item: any) => (item.$id === product.$id ? { ...item, quantity: item.quantity + 1 } : item))
          : [...prev, { ...product, quantity: 1 }]
      )
    } else {
      toast({ title: 'Sign In First', variant: 'destructive' })
    }
  }

  return (
    <div className="basis-3.5/6 w-full">
      <div className="mr-6 mt-4 flex-1 bg-gray-100 p-10">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-950">{t('title')}</h2>
        <div className={`${styles.customScrollbar} h-[60vh] space-y-4 overflow-hidden`}>
          {products.length > 0 &&
            products.map((product: any) => (
              <div
                key={product.$id}
                className="flex items-center justify-between rounded border-y-2 border-[#e0e0e0] bg-white p-4 shadow transition-shadow duration-300 hover:shadow-xl hover:shadow-mainRed/30"
              >
                <div className="flex items-center">
                  <Image className="h-20 w-20 rounded-lg" src={product.image} alt={product.name} width={80} height={80} />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold">${product.price}</span>
                  <button
                    className="group/plus ml-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#BDBDBD] text-green-500 transition-all duration-300 hover:border-0 hover:bg-green-500"
                    onClick={() => addToBasket(product)}
                  >
                    <Plus className={`text-[#BDBDBD] duration-300 group-hover/plus:text-white`} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList

'use client'
import Table from '@sections/Admin/Table'
import { EllipsisVertical } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import UserPagination from '../Paginations/UserPagination'
import { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@ui/alert-dialog'
import OrdersModal from '@sections/Orders/OrdersModal'
import { deleteDocument, getDocuments } from '../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import { useTranslations } from 'next-intl'
import LoadingAnimation from '@ui/LoadingAnimation'

const OrdersSection: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)
  const [orders, setOrders] = useState([])
  const [userId, setUserId] = useState('')
  const [loading, setloading] = useState(true)
  const { Root, DropdownMenuTrigger, Portal, Content, Item } = DropdownMenu

  const t = useTranslations('Admin.Products.Modal')
  const t2 = useTranslations('OrdersSection')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (token != '') setUserId(token)
        
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      setUserId(updatedToken || '')
    }

    window.addEventListener('storage', handleStorageChange)

    if (!userId) return
    ;(async () => {
      const user: any = await getDocuments(collections.userId, userId)

      if (!user.orders) return

      const filteredOrders = user.orders.map((order: any) => {
        const { amount, phone, basket, address, payment, time } = JSON.parse(order.orderInfo)

        return {
          id: order.$id,
          basket,
          time,
          address,
          amount,
          payment,
          phone
        }
      })
      setOrders(filteredOrders)
    })()

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [userId])

  const headers = ['ID', 'Time', 'Delivery Address', 'Amount', 'Payment Method', 'Contact', '']

  const filteredData = orders.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => {
    const { id, amount, phone, basket, address, payment, time } = order
    const updatesOrder = {
      id,
      time,
      address,
      amount,
      payment,
      phone
    }

    const basketHeader = ['Image', 'Name', 'Price $', 'Count', 'Amount']
    const updatesBasket = basket.map((item: any) => {
      const { image, name, price, quantity } = item
      return {
        image,
        name,
        price,
        quantity,
        amount: Number(price) * Number(quantity)
      }
    })
    return {
      ...updatesOrder,
      actions: (
        <Root>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <Portal>
            <Content className="shadow-custom h-fit w-[79px] bg-white">
              <OrdersModal
                trigger={
                  <div className="w-[79px] cursor-pointer py-2 text-center font-bold text-green-600 outline-none hover:bg-slate-300">
                    {t2('show')}
                  </div>
                }
                header={basketHeader}
                body={updatesBasket}
              />

              <AlertDialog>
                <AlertDialogTrigger className="w-[79px] cursor-pointer py-2 text-center font-bold text-red-700 outline-none hover:bg-slate-300">
                  {t('deleteBtn')}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t('title')}</AlertDialogTitle>
                    <AlertDialogDescription>{t('text')}</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t('cancelBtn')}</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteOrder(id)} className="bg-red-600">
                      {t('deleteBtn')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </Content>
          </Portal>
        </Root>
      )
    }
  })

  const deleteOrder = async (id: string) => {
    await deleteDocument(collections.ordersId, id)
    setOrders((prev) => prev.filter((order) => order.id !== id))
  }

  useEffect(() => {
    setloading(false)
  }, [filteredData])

  return loading ? (
    <LoadingAnimation width={150} height={150} />
  ) : (
    <div className="flex h-full min-h-[500px] flex-col gap-7 bg-[#F3F4F6] p-8">
      <h2 className="font-mukta text-[30px] font-semibold leading-[24px] tracking-[3%] text-black">{t2('yourOrders')}</h2>

      <Table headers={headers} body={filteredData} />
      {orders.length > perPage && (
        <UserPagination
          setCurrentPage={setCurrentPage}
          dataCount={orders.length}
          currentPage={currentPage}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      )}
    </div>
  )
}

export default OrdersSection

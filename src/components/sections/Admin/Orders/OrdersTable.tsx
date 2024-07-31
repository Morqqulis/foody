'use client'
import { Eye } from 'lucide-react'

import Table from '../Table'
import DeleteModal from '../DeleteModal/DeleteModal'
import { useEffect, useState } from 'react'
import { getListDocuments, subscribeToCollection } from '../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import OrdersModal from '@sections/Orders/OrdersModal'
import Pagination from '@sections/Paginations/AdminPagination'
interface IOrdersTable {}

const OrdersTable: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await subscribeToCollection(collections.ordersId, setOrders)

      const filterOrders = data.map((order: any) => {
        const { amount, phone, basket, address, payment, time } = JSON.parse(order.orderInfo)
        return {
          id: order.$id,
          userId: order.user.$id,
          basket,
          time,
          address,
          amount,
          payment,
          phone
        }
      })
      setFilteredOrders(filterOrders)
    })()
  }, [orders])

  const header = ['ID', 'Customer ID', 'Time', 'Delivery Address', 'Amount', 'Payment Method', 'Contact']

  const filteredData = filteredOrders.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => {
    const { id, userId, amount, phone, basket, address, payment, time } = order
    const updatesOrder = {
      id,
      userId,
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
        <div className="flex gap-2">
          <OrdersModal trigger={<Eye className="h-6 w-6 cursor-pointer" />} header={basketHeader} body={updatesBasket} />
          <DeleteModal collectionId={collections.ordersId} deletedId={id} />
        </div>
      )
    }
  })

  return (
    <div className="flex  w-full flex-col items-center gap-5">
      <Table headers={header} body={filteredData} />
      {filteredOrders.length > perPage && (
        <Pagination setCurrentPage={setCurrentPage} dataCount={filteredOrders.length} currentPage={currentPage} perPage={perPage} />
      )}
    </div>
  )
}

export default OrdersTable

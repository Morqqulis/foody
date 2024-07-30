'use client'
import Table from '../Table'
import { FC, useEffect, useState } from 'react'
import { getListDocuments } from '../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import Pagination from '@sections/Paginations/AdminPagination'
interface IOrderHistoryPage {}

const OrderHistoryPage: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5
  const [orders, setOrders] = useState([])

  useEffect(() => {
    ;(async () => {
      const orders = await getListDocuments(collections.ordersId)

      const filteredOrders = orders.documents.map((order: any) => {
        const { amount, phone, address, payment, time } = JSON.parse(order.orderInfo)
        return {
          id: order.$id,
          userId: order.user.$id,
          time,
          address,
          amount,
          payment,
          phone
        }
      })
      setOrders(filteredOrders)
    })()
  }, [])

  const header = ['ID', 'Customer ID', 'Time', 'Delivery Address', 'Amount', 'Payment Method', 'Contact']

  const filteredData = orders.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => {
    const { id, userId, amount, phone, address, payment, time } = order
    const updatesOrder = {
      id,
      userId,
      time,
      address,
      amount,
      payment,
      phone
    }

    return updatesOrder
  })

  return (
    <div className="flex  w-full flex-col items-center gap-5">
      <Table headers={header} body={filteredData} />

      {orders.length > perPage && (
        <Pagination setCurrentPage={setCurrentPage} dataCount={orders.length} currentPage={currentPage} perPage={perPage} />
      )}
    </div>
  )
}

export default OrderHistoryPage

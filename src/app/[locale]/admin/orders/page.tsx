import AdminAside from '@sections/Admin/Aside/AdminAside'
import { NextPage } from 'next'

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <main>   <div className="container">
    <AdminAside />
  </div> AdminOrders</main>
  )
}

export default OrdersPage
import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import OrderHistory from '@sections/Admin/History/OrdersHistory'
import { NextPage } from 'next'

interface IOrderHistoryPage {}

const OrderHistoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex flex-col bg-[#1E1E30]">
      <SectionHeader title="History" />
      <OrderHistory />
    </main>
  )
}

export default OrderHistoryPage

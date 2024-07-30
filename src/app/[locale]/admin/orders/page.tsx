import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import OrdersTable from '@sections/Admin/Orders/OrdersTable'
import { NextPage } from 'next'

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] w-full bg-[#1E1E30]">
      <section className={`w-full`}>
        <SectionHeader title="Orders" />
        <OrdersTable />
      </section>
    </main>
  )
}

export default OrdersPage

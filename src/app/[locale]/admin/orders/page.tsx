import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import OrdersTable from '@sections/Admin/Orders/OrdersTable'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
  const t=useTranslations('Admin.Orders')

  return (
    <main className="flex gap-[28px] w-full bg-[#1E1E30]">
      <section className={`w-full`}>
        <SectionHeader title={t("title")} />
        <OrdersTable />
      </section>
    </main>
  )
}

export default OrdersPage

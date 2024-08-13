import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import OrderHistory from '@sections/Admin/History/OrdersHistory'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

interface IOrderHistoryPage {}

const OrderHistoryPage: NextPage = (): JSX.Element => {
const t=useTranslations('Admin.History')

  return (
    <main className="flex flex-col bg-[#1E1E30]">
      <SectionHeader title={t("title")} />
      <OrderHistory />
    </main>
  )
}

export default OrderHistoryPage

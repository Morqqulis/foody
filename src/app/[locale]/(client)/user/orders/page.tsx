import OrdersSection from '@sections/Orders/OrdersSection'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'
interface IUserOrdersPage {}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'User.Orders.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

const UserOrdersPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <OrdersSection />
    </main>
  )
}

export default UserOrdersPage

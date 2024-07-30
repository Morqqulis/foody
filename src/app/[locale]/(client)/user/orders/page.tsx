import OrdersSection from '@sections/User/Orders/OrdersSection'
import { NextPage } from 'next'
interface IUserOrdersPage {}

const UserOrdersPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <OrdersSection />
    </main>
  )
}

export default UserOrdersPage

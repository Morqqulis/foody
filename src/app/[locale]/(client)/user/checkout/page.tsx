import CheckoutHome from '@sections/Checkout/CheckoutHome'
import { NextPage } from 'next'

interface IUserCheckoutPage {}

const UserCheckoutPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <CheckoutHome />
    </main>
  )
}

export default UserCheckoutPage

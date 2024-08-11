import CheckoutHome from '@sections/Checkout/CheckoutHome'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

interface IUserCheckoutPage {}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'User.Checkout.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

const UserCheckoutPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <CheckoutHome />
    </main>
  )
}

export default UserCheckoutPage

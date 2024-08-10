import Basket from '@sections/Basket/Basket'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

interface IUserBasketPage {}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'User.Basket.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

const UserBasketPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <Basket />
    </main>
  )
}

export default UserBasketPage

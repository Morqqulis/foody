import RestaurantSection from '@sections/Restaurants/RestaurantSection'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Restaurants.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

interface IRestaurants {}

const RestaurantsPage: NextPage = (): JSX.Element => {
  return (
    <main className="wrapper">
      <RestaurantSection />
    </main>
  )
}

export default RestaurantsPage

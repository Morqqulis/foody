import RestaurantsHeader from '@sections/Restaurants/RestaurantsHeader'
import RestoranItems from '@sections/Restaurants/RestoranItems'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale, id } }) {
  const t = await getTranslations({ locale, namespace: 'Restaurants.Metadata' })
  return {
    title: id.split('__')[0].replace('%20', ' '),
    description: t('description')
  }
}

interface IRestaurantPage {
  params: { locale: string; id: string }
}

const RestaurantPage: NextPage = ({ params: { locale, id } }: IRestaurantPage): JSX.Element => {
  const ids = id.split('__')[1]

  return (
    <main>
      <section className={``}>
        <div className="container">
          <RestaurantsHeader restId={ids} />
          <RestoranItems restId={ids} />
        </div>
      </section>
    </main>
  )
}

export default RestaurantPage

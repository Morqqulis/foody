import RestaurantsHeader from '@sections/Restaurants/RestaurantsHeader'
import RestoranItems from '@sections/Restaurants/RestoranItems'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale, id } }) {
  const t = await getTranslations({ locale, namespace: 'Restaurants.Metadata' })
  return {
    title: id.split('__')[0].replace(/%20/g, ' '),
    description: t('description')
  }
}

interface IRestaurantPage {
  params: { locale: string; id: string }
}

const RestaurantPage: NextPage = ({ params: { locale, id } }: IRestaurantPage): JSX.Element => {
  const identifier = id.split('__')[1]

  return (
    <main>
      <section className={``}>
        <div className="container">
          <RestaurantsHeader restId={identifier} />
          <RestoranItems restId={identifier} />
        </div>
      </section>
    </main>
  )
}

export default RestaurantPage

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IRestCard {
  data: {
    id: number
    image: string
    name: string
    cuisine: string
    deliveryPrice: number
    deliveryMin: number
    new?: boolean
    $id: string
    // description: string;
  }
}

const RestaurantCard: FC<IRestCard> = ({ data }): JSX.Element => {
  const t = useTranslations('RestaurantCard')
  return (
    <Link
      className={`group/rest-card relative flex  h-full w-full max-w-[235px] flex-col whitespace-nowrap rounded-md p-5 duration-300 hover:scale-105 hover:shadow-2xl`}
      style={{ boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.25)' }}
      href={`/restaurants/${data.name + '__' + data.$id}`}
    >
      <Image
        className={`mb-10 h-[160px] w-full rounded-md group-hover/rest-card:scale-105`}
        src={data.image}
        alt="image"
        width={200}
        height={200}
        priority
      />
      <h3 className={`mb-2.5 text-lg font-bold text-gray-2`}>{data.name}</h3>
      <p className={`mb-5 grow`}>{data.cuisine}</p>
      <div className={`flex flex-wrap items-center justify-between gap-2.5`}>
        <span className={`text-base font-bold text-gray-2`}>
          ${data.deliveryPrice} {t('delivery')}
        </span>
        <span className={`whitespace-nowrap rounded-full bg-mainRed px-5 py-1 text-center font-medium text-white`}>
          {data.deliveryMin} {t('minutes')}
        </span>
      </div>
      {data.new && <span className={`absolute left-0 top-0 bg-mainRed px-3 py-0.5 text-white`}>{t('new')}</span>}
    </Link>
  )
}

export default RestaurantCard

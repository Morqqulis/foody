import Text from '@ui/Text'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface IPopular {}

interface IPopularCardsImages {
  id: number
  imagePath: string
  imageWidth: number
  imageHeight: number
}

const popularCardsImages: IPopularCardsImages[] = [
  {
    id: 0,
    imagePath: '/Home/Popular/1.jpg',
    imageWidth: 239,
    imageHeight: 233
  },
  {
    id: 1,
    imagePath: '/Home/Popular/2.jpg',
    imageWidth: 241,
    imageHeight: 233
  },
  {
    id: 2,
    imagePath: '/Home/Popular/3.jpg',
    imageWidth: 267,
    imageHeight: 193
  }
]

const Popular: React.FC = (): JSX.Element => {
  const t = useTranslations('Home.Popular')

  return (
    <section className="mb-10 py-20 md:mb-40">
      <div className="container">
        <Title className="mx-auto mb-4 w-full max-w-lg text-center text-4xl font-black leading-tight" tag={'h3'} text={t('title')} />
        <Text className="mx-auto mb-8 max-w-3xl text-center" text={t('text')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCardsImages.map((item) => (
            <div
              className="group flex h-full w-full max-w-xs flex-col items-center gap-8 bg-white px-6 pb-8 text-center shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              key={item.id}
            >
              <Image
                className="h-[233px] w-full border-2 border-dashed transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={item.imagePath}
                width={item.imageWidth}
                height={item.imageHeight}
                alt="popular image"
              />
              <span className="text-2xl font-bold leading-snug text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-primary">
                {t(`cardsTitles.${item.id}`)}
              </span>
              <Text className="transition-colors duration-300 ease-in-out group-hover:text-gray-600" text={t(`cardsTexts.${item.id}`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular

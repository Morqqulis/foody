import FeaturesCard from '@ui/FeaturesCard'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'

interface IFeatures {}

interface IFeaturesCardsData {
  id: number
  imagePath: string
  imageWidth: number
}

const FeaturesCardsData: IFeaturesCardsData[] = [
  {
    id: 0,
    imagePath: '/Home/Features/1.jpg',
    imageWidth: 239
  },
  {
    id: 1,
    imagePath: '/Home/Features/2.jpg',
    imageWidth: 241
  },
  {
    id: 2,
    imagePath: '/Home/Features/3.jpg',
    imageWidth: 241
  }
]

const Features: React.FC<IFeatures> = (): JSX.Element => {
  const t = useTranslations('Home.Features')

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <Title className="text-[40px] font-black leading-[70px]" tag={'h2'} text={t('title')} />
          <p className="mx-auto mb-14 max-w-[780px] text-[22px] leading-[30px]">{t('text')}</p>
        </div>
        <div className="grid grid-cols-1 place-items-center items-start gap-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {FeaturesCardsData.map((item) => (
            <FeaturesCard
              className="h-full w-full max-w-full md:max-w-full lg:max-w-[327px] lg:last:col-span-1 lg:last:w-auto lg:last:max-w-[327px] transition-transform duration-500 ease-in-out hover:scale-105 animate-flip-down"
              key={item.id}
              title={t(`cardsTitle.${item.id}`)}
              text={t(`cardsText.${item.id}`)}
              imagePath={item.imagePath}
              imageWidth={item.imageWidth}
              imageHeight={233}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

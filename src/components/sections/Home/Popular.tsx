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
    <section className={`mb-10 py-20 md:mb-40`}>
      <div className="container">
        <Title className={`mx-auto mb-[15px] w-full max-w-[500px] text-center text-[48px] font-black leading-[50px]`} tag={'h3'} text={t('title')} />
        <Text className={`mx-auto mb-[30px] max-w-[780px] text-center`} text={t('text')} />
        <div className={`grid grid-cols-3 justify-between gap-8`}>
          {popularCardsImages.map((item) => (
            <div
              className={`flex h-full w-full max-w-[350px] flex-col items-center gap-8 bg-white px-6 pb-8 text-center shadow-[0px_4px_4px_0px_rgb(0_0_0/25%)] blur-[.5px]`}
              key={item.id}
            >
              <Image
                className={`h-[233px] border-[2px] border-dashed`}
                src={item.imagePath}
                width={item.imageWidth}
                height={item.imageHeight}
                alt={'popular image'}
              />
              <span className={`text-[30px] font-bold leading-[70px] text-gray-2`}>{t(`cardsTitles.${item.id}`)}</span>
              <Text className={``} text={t(`cardsTexts.${item.id}`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular

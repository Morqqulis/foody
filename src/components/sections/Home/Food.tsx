import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface IFoodCardsData {
  id: number
  imagePath: string
  imageWidth: number
  imageHeight: number
  alt: string
}

const FoodCardsData: IFoodCardsData[] = [
  {
    id: 0,
    imagePath: '/Home/Food/1.jpg',
    imageWidth: 637,
    imageHeight: 677,
    alt: 'food image'
  },
  {
    id: 1,
    imagePath: '/Home/Food/2.jpg',
    imageWidth: 620,
    imageHeight: 654,
    alt: 'food image'
  },
  {
    id: 2,
    imagePath: '/Home/Food/3.jpg',
    imageWidth: 668,
    imageHeight: 681,
    alt: 'food image'
  }
]

const Food: React.FC = (): JSX.Element => {
  const t = useTranslations('Home.Food')

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-12">
          {FoodCardsData.map((item) => (
            <div className="flex items-start justify-between gap-8 even:flex-row-reverse" key={item.id}>
              <div>
                <Title
                  className="mb-[30px] max-w-[653px] text-balance text-[50px] font-black leading-[70px]"
                  tag={'h3'}
                  text={t(`titles.${item.id}`)}
                />
                <p className="max-w-[500px] text-[22px] leading-[30px]">{t(`texts.${item.id}`)}</p>
              </div>
              <div>
                <Image
                  className="animate-wiggle-more"
                  src={item.imagePath}
                  alt={item.alt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Food

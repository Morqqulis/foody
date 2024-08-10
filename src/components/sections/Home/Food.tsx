'use client'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getListDocuments } from '../../../utls/functions'
import { collections } from '@libs/appwrite/config'

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
    imagePath: '/Home/Food/1.png',
    imageWidth: 637,
    imageHeight: 677,
    alt: 'food image'
  },
  {
    id: 1,
    imagePath: '/Home/Food/2.png',
    imageWidth: 620,
    imageHeight: 654,
    alt: 'food image'
  },
  {
    id: 2,
    imagePath: '/Home/Food/3.png',
    imageWidth: 668,
    imageHeight: 681,
    alt: 'food image'
  }
]

const Food: React.FC = (): JSX.Element => {
  const [offers, setOffers] = useState([])
  const t = useTranslations('Home.Food')

  useEffect(() => {
    ;(async () => {
      const { documents } = await getListDocuments(collections.offersId)
      const data = documents.map((offer) => ({ ...JSON.parse(offer.offer), id: offer.$id }))
      setOffers(data)
    })()
  }, [])

  return (
    <section className="py-20">
      <div className="container">
        <div className={`flex flex-col gap-12`}>
          {offers.map((item, index) => {
            const { id, title, description, image } = item

            return (
              <div className={`flex items-start justify-between gap-8 even:flex-row-reverse`} key={id}>
                <div>
                  <Title className={`mb-[30px] max-w-[653px] text-balance text-[50px] font-black leading-[70px]`} tag={'h3'} text={title} />
                  <p className={`max-w-[500px] text-[22px] leading-[30px]`}>{description}</p>
                </div>

                <div className={`relative h-[550px] w-[450px] rounded-[50px] bg-mainRed ${index % 2 === 0 ? 'rotate-[23deg] ' : 'rotate-[-23deg] '}`}>
                  <Image
                    className="animate-wiggle-more absolute top-1/4 h-auto w-full translate-x-[-50%] translate-y-[-50%]"
                    src={image}
                    alt={title}
                    width={630}
                    height={650}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Food

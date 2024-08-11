'use client'
import { headerModalData } from '@data/data'
import { Button } from '@ui/button'
import { MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getListDocuments } from '../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import { Link } from '@settings/navigation'

interface Isearchbar {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  value: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar: React.FC<Isearchbar> = ({ setShowModal, value, setInputValue }): JSX.Element => {
  const [filteredValues, setFilteredValues] = useState([])
  const [restaurants, setrestaurants] = useState([])

  useEffect(() => {
    ;(async () => {
      const { documents } = await getListDocuments(collections.restaurantsId)
      setrestaurants(documents)
    })()
  }, [])

  useEffect(() => {
    const filteredValue = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredValues(filteredValue)
  }, [value, restaurants])

  const t = useTranslations('Header')
  return (
    <div
      className={`absolute right-[350px] top-20 z-10 box-border flex h-[319px]  w-[509px] flex-col justify-between rounded-lg border border-[#f7f6fc] bg-white shadow-xl`}
    >
      <div className="h-[80%] overflow-auto">
        {filteredValues.map((restaurant) => (
          <Link
            href={`/restaurants/${restaurant.$id}`}
            key={restaurant.$id}
            onClick={() => {
              setShowModal(false)
              setInputValue('')
            }}
            className="flex h-[25%] cursor-pointer gap-[40px] border-b-[1px] p-[24px] hover:bg-slate-300"
          >
            <Image src={restaurant.image} alt="image" width={59} height={37} className="h-[37px] w-[59px] rounded-lg" />
            <div className="flex flex-col">
              <h2 className="text-[14px] font-bold leading-[16px] text-[#2B3043]">{restaurant.name}</h2>{' '}
              <p className=" text-[14px] leading-[16px]  text-[#2B3043]">{restaurant.cuisine}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex h-[20%] items-center justify-center">
        <Link onClick={() => setShowModal(false)} href="/restaurants" className="flex items-center gap-1 text-lg">
          {t('more')} <MoveRight />
        </Link>
      </div>
    </div>
  )
}

export default Searchbar

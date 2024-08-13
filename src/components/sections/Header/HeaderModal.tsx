'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState, useCallback, useRef } from 'react'
import { getListDocuments } from '../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import { Link } from '@settings/navigation'
import { MoveRight } from 'lucide-react'
import LoadingAnimation from '@ui/LoadingAnimation'

interface Isearchbar {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  value: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar: React.FC<Isearchbar> = ({ setShowModal, value, setInputValue }): JSX.Element => {
  const [filteredValues, setFilteredValues] = useState([])
  const [restaurants, setrestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { documents } = await getListDocuments(collections.restaurantsId)
      setrestaurants(documents)
    }
    fetchRestaurants()
  }, [])

  const filterRestaurants = useCallback(() => {
    const filteredValue = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredValues(filteredValue)
  }, [value, restaurants])

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    debounceTimeoutRef.current = setTimeout(filterRestaurants, 300) // 300ms delay
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
        setLoading(false)
      }
    }
  }, [value, filterRestaurants])

  const t = useTranslations('Header')
  return (
    <div
      className={`absolute right-[350px] top-28 z-10 box-border flex h-[319px]  w-[509px] flex-col justify-between rounded-lg border border-[#f7f6fc] bg-white shadow-xl `}
    >
      <div className="h-[80%] overflow-auto ">
        {loading ? (
          <LoadingAnimation className="col-span-4" width={100} height={100} />
        ) : (
          filteredValues.map((restaurant) => (
            <Link
              href={`/restaurants/${restaurant.name + '__' + restaurant.$id}`}
              key={restaurant.$id}
              onClick={() => {
                setShowModal(false)
                setInputValue('')
              }}
              className="flex h-[25%] cursor-pointer items-center gap-[40px] border-b-[1px] p-[24px] hover:bg-slate-300"
            >
              <Image src={restaurant.image} alt="image" width={59} height={37} className="h-[37px] w-[59px] rounded-lg" />
              <div className="flex flex-col">
                <h2 className="text-[14px] font-bold leading-[16px] text-[#2B3043]">{restaurant.name}</h2>{' '}
                <p className=" text-[14px] leading-[16px]  text-[#2B3043]">{restaurant.cuisine}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex h-[20%] items-center justify-center">
        <Link
          onClick={() => {
            setShowModal(false)
            setInputValue('')
          }}
          href="/restaurants"
          className="flex items-center gap-1 text-lg"
        >
          {t('more')} <MoveRight />
        </Link>
      </div>
    </div>
  )
}

export default Searchbar

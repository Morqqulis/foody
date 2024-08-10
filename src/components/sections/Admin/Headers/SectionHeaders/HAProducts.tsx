'use client'
import { useTranslations } from 'next-intl'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select'
import { Search } from 'lucide-react'
import { Input } from '@ui/input'
import { useEffect, useState } from 'react'
import { getListDocuments } from '../../../../../utls/functions'
import { collections } from '@libs/appwrite/config'

interface IProducts {
  setSelected?: React.Dispatch<React.SetStateAction<string>>
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>
}

const AdminProducts: React.FC<IProducts> = ({ setSelected, setSearchValue }): JSX.Element => {
  const [restaurants, setRestaurants] = useState([])
  const t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet.imageBlock`)
  const t2 = useTranslations(`Header`)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    ;(async () => {
      const res = await getListDocuments(collections.restaurantsId)
      setRestaurants(res.documents)
    })()
  }, [])

  return (
    <div className="flex  gap-[15px]  md:items-center mmd:flex-col">
      <Select onValueChange={setSelected}>
        <SelectTrigger className="min-w-[180px] border-none  bg-[#5A5B70] text-white mmd:w-full">
          <SelectValue placeholder="Restaurant Type" />
        </SelectTrigger>
        <SelectContent className="bg-[#5A5B70] text-white">
          <SelectItem value={'All'}>All</SelectItem>

          {restaurants?.map((restaurant: any) => (
            <SelectItem key={restaurant.$id} value={restaurant.$id}>
              {restaurant.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {open ? (
        <div
          className={`flex min-w-[150px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C035A2] p-2 text-white mmd:w-full `}
          onClick={() => setOpen(false)}
        >
          <>
            <Search size={20} /> {t2('search')}
          </>
        </div>
      ) : (
        <div className="flex gap-2 text-white mmd:w-full ">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#C035A2] " onClick={() => setOpen(true)}>
            <Search size={20} />
          </div>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            className={`w-[250px] border-none bg-[#5A5B70] text-white mmd:w-[calc(100%-50px)]`}
          />
        </div>
      )}
    </div>
  )
}

export default AdminProducts

'use client'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { getListDocuments } from '../../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select'

interface IAdminRestaurants {
  setSelected?: React.Dispatch<React.SetStateAction<string>>
}

const AdminRestaurants: React.FC<IAdminRestaurants> = ({ setSelected }): JSX.Element => {
  const [categories, setCategories] = useState<any>()
  useEffect(() => {
    ;(async () => {
      const categories = await getListDocuments(collections.categoriesId)
      setCategories(categories.documents)
    })()
  }, [])

  const t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet.imageBlock`)
  return (
    <div className="flex gap-[15px] md:items-center md:justify-center  mmd:flex-col ">
      <Select onValueChange={setSelected}>
        <SelectTrigger className="min-w-[180px] border-none bg-[#5A5B70] text-white mmd:w-full">
          <SelectValue placeholder="Category Type" />
        </SelectTrigger>
        <SelectContent className="bg-[#5A5B70] text-white">
          <SelectItem value={'All'}>All</SelectItem>
          {categories?.map((restaurant: any) => (
            <SelectItem key={restaurant.$id} value={restaurant.$id}>
              {restaurant.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <ReusableSheet
        trigger={
          <div className={`flex items-center justify-center rounded-full  bg-[#C035A2] text-white md:w-full md:p-2 mmd:p-3 `}>{t('title')}</div>
        }
        whatIs="AddRestaurant"
      />
    </div>
  )
}

export default AdminRestaurants

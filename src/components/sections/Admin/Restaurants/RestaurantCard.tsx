'use client'
import { Pencil } from 'lucide-react'
import Image from 'next/image'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'
import DeleteModal from '../DeleteModal/DeleteModal'

interface IRestCard {
  prop: any
}

const RestaurantCard: React.FC<IRestCard> = ({ prop }): JSX.Element => {
  return (
    <div className="flex h-[83px] max-w-[250px] items-center justify-between gap-4 rounded bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] ">
      <div className={`flex items-center gap-4 p-4`}>
        {prop?.image && <Image className={`w-full max-w-[65px]`} src={prop.image} alt="image" width={80} height={80} />}
        <div className="w-full whitespace-nowrap">
          <h3 className="text-lg font-medium text-[#1E1E30]">{prop.name}</h3>
          <p className="text-sm font-medium  text-[#8E8E93]">{prop.cuisine}</p>
        </div>
      </div>

      <div className={`flex h-full flex-col justify-between gap-1 p-2`}>
        <DeleteModal collectionId={prop.$collectionId} deletedId={prop.$id} />
        <ReusableSheet trigger={<Pencil size={20} color="#00B2A9" className="cursor-pointer" />} whatIs="EditRestaurant" id={prop.$id} />
      </div>
    </div>
  )
}

export default RestaurantCard

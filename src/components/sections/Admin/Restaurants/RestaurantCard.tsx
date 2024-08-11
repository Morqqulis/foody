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
    <div className="relative flex h-[83px] w-full max-w-[247px] items-center justify-between gap-4 rounded bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] ">
      <div className={`flex items-center gap-4 p-4 `}>
        {prop?.image && <Image className={``} src={prop.image} alt="image" width={80} height={80} />}
        <div className="w-full whitespace-nowrap">
          <h3 className="w-44 overflow-hidden text-lg font-medium text-[#1E1E30]">
            {prop.name.length > 8 ? `${prop.name.slice(0, 8)}...` : prop.name}
          </h3>
          <p className="w-44 overflow-hidden  text-sm font-medium text-[#8E8E93]">
            {prop.cuisine.length > 10 ? `${prop.cuisine.slice(0, 10)}...` : prop.cuisine}
          </p>
        </div>
      </div>

      <div className={`absolute right-1 flex h-full flex-col justify-between gap-1 p-2`}>
        <DeleteModal collectionId={prop.$collectionId} deletedId={prop.$id} />
        <ReusableSheet trigger={<Pencil size={20} color="#00B2A9" className="cursor-pointer" />} whatIs="EditRestaurant" id={prop.$id} />
      </div>
    </div>
  )
}

export default RestaurantCard

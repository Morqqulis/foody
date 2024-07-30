import { Pencil } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import ReusableSheet from '../Sheet/ReusableSheet'

import { useTranslations } from 'next-intl'
import DeleteModal from '../DeleteModal/DeleteModal'

interface IProdCard {
  prod: any
}
const ProductCard: FC<IProdCard> = ({ prod }): JSX.Element => {
  const t = useTranslations("Admin.Products");
  

  return (
    <div className="flex h-[273px] w-[196px] items-center justify-center rounded-[5px]  bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] ">
      <div className="flex h-[90%] w-[90%] flex-col justify-between">
        <Image src={prod.image} alt="image" width={160} height={158} className=" h-[50%] w-full rounded-lg" />

        <div className=" mt-2 h-[40%] w-[100%]  whitespace-nowrap">
          <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{prod.name}</h1>
          <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">{prod.restaurant.name}</p>
        </div>

        <div className="flex h-[10%] items-center justify-between">
          <p className=" h-[21px] w-[50.77px] text-[12px] font-medium leading-[24px] text-[#00B2A9]">${prod.price}</p>
          <div className="flex items-center gap-[10px]">
            <ReusableSheet trigger={<Pencil size={20} color="#00B2A9" className="cursor-pointer" />} whatIs="EditProduct" id={prod.$id} />
            <DeleteModal collectionId={prod.$collectionId} deletedId={prod.$id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

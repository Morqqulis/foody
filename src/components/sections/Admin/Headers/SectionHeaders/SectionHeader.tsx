'use client'
import { usePathname } from 'next/navigation'
import AdminRestaurants from './HARestaurants'
import AdminCategory from './HACategory'
import HAOffers from './HAOffers'
import HAProducts from './HAProducts'

interface ISectionHeader {
  title: string
  setSelected?: React.Dispatch<React.SetStateAction<string>>
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>
}

const SectionHeader: React.FC<ISectionHeader> = ({ title, setSelected, setSearchValue }): JSX.Element => {
  const path = usePathname()
  return (
    <div className="grid w-full items-center justify-between rounded-[14px] bg-[#27283C] md:grid-cols-2 md:py-4 md:pl-7 md:pr-5 mmd:min-w-[90%] mmd:grid-cols-1 mmd:gap-3 mmd:p-5 ">
      <h1 className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{title}</h1>

      <div className={`md:justify-self-end  mmd:w-full`}>
        {path === '/admin/restaurants' && <AdminRestaurants setSelected={setSelected} />}
        {path === '/admin/category' && <AdminCategory />}
        {path === '/admin/offers' && <HAOffers />}
        {path === '/admin/products' && <HAProducts setSelected={setSelected} setSearchValue={setSearchValue} />}
      </div>
    </div>
  )
}

export default SectionHeader

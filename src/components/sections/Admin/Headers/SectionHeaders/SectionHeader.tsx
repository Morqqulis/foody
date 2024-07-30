"use client";
import { usePathname } from "next/navigation";
import AdminRestaurants from "./HARestaurants";
import AdminCategory from "./HACategory";
import HAOffers from "./HAOffers";
import HAProducts from "./HAProducts";

interface ISectionHeader {
  title: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
}

const SectionHeader: React.FC<ISectionHeader> = ({ title, setSelected,setSearchValue }): JSX.Element => {
  const path = usePathname();
  return (
    <div className="flex h-[73px] w-full justify-between rounded-[14px] bg-[#27283C] p-[22px]">
      <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{title}</p>

      {path === "/admin/restaurants" && <AdminRestaurants setSelected={setSelected} />}
      {path === "/admin/category" && <AdminCategory />}
      {path === "/admin/offers" && <HAOffers />}
      {path === "/admin/products" && <HAProducts setSelected={setSelected} setSearchValue={setSearchValue} />}
    </div>
  );
};

export default SectionHeader;

'use client';
import { usePathname } from "next/navigation";
import AdminRestaurants from "./HARestaurants";

interface ISectionHeader {
  title: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({ title }): JSX.Element => {
  const path = usePathname();
  return (
    <div className="flex h-[73px] w-[1124px] justify-between rounded-[14px] bg-[#27283C] p-[22px]">
      <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{title}</p>

      {path === "/admin/restaurants" && <AdminRestaurants />}
    </div>
  );
};

export default SectionHeader;

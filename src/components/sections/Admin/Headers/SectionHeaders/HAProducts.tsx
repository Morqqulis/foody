"use client";
import { useTranslations } from "next-intl";
interface IAdminRestaurants {}
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import { Search } from "lucide-react";
import { Input } from "@ui/input";
import { useState } from "react";

const AdminRestaurants: React.FC = (): JSX.Element => {
  const t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet.imageBlock`);
  const t2 = useTranslations(`Header`);
  const [open, setOpen] = useState(true);
  return (
    <div className="flex items-center justify-center gap-[15px]">
      <Select>
        <SelectTrigger className="w-[180px] border-none bg-[#5A5B70] text-white">
          <SelectValue placeholder="Category Type" />
        </SelectTrigger>
        <SelectContent className="bg-[#5A5B70] text-white">
          <SelectItem value="steak">Steak</SelectItem>
          <SelectItem value="pizza">Pizza</SelectItem>
          <SelectItem value="coffee"> Coffee</SelectItem>
        </SelectContent>
      </Select>
      {open ? (
        <div
          className={`flex w-[150px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C035A2] p-2 text-white `}
          onClick={() => setOpen(false)}
        >
          <>
            <Search size={20} /> {t2("search")}
          </>
        </div>
      ) : (
        <div className="flex gap-2 p-2 text-white">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#C035A2]" onClick={() => setOpen(true)}>
            <Search size={20} />
          </div>
          <Input className={`w-[250px] border-none bg-[#5A5B70] text-white`} />
        </div>
      )}
    </div>
  );
};

export default AdminRestaurants;

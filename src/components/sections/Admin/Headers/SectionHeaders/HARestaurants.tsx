import { Button } from "@ui/button";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import { useTranslations } from "next-intl";
interface IAdminRestaurants {}

const AdminRestaurants: React.FC = (): JSX.Element => {
  const t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet.imageBlock`);
  return (
    <div className="flex items-center justify-center gap-[15px]">
      <select name="" id="" className="w-[200px] rounded-full border-none bg-[#5A5B70] px-3 py-2 text-white ">
        <option value="" className="bg-white text-black">
          Fast Food
        </option>
        <option value="" className="bg-white text-black">
          Pizza
        </option>
        <option value="" className="bg-white text-black">
          Steak
        </option>
        <option value="" className="bg-white text-black">
          Coffee
        </option>
      </select>

      <ReusableSheet trigger={<div className={`flex p-2 rounded-full bg-[#C035A2]`}>{t("title")}</div>} whatIs="AddRestaurant" />
    </div>
  );
};

export default AdminRestaurants;

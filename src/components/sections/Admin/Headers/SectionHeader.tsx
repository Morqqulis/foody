
import { Button } from "@ui/button";
import { FC } from "react";
import ReusableSheet from "../Sheet/ReusableSheet"
import { useTranslations } from "next-intl";
interface IProductsPage {
  title: string;

}






const SectionHeader: FC<IProductsPage> = ({ title }): JSX.Element => {
  let t: any;
  let t2 = useTranslations(`Admin.${title}`)
  if (title === "Restaurants") {
    t = useTranslations(`Admin.${title}.AddRestaurant.Sheet.imageBlock`)

  }
  return (
    <div className="h-[73px] w-[1124px] rounded-[14px] bg-[#27283C] p-[22px] flex justify-between ">
      <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{t2("Title")}</p>
      {


        title === "Restaurants" && <div className="flex items-center justify-center gap-[15px]">

          <select name="" id="" className="w-[200px] px-3 py-2 bg-[#5A5B70] text-white border-none rounded-full ">
            <option value="" className="bg-white text-black">Fast Food</option>
            <option value="" className="bg-white text-black">Pizza</option>
            <option value="" className="bg-white text-black">Steak</option>
            <option value="" className="bg-white text-black">Coffee</option>
          </select>

          <ReusableSheet trigger={<Button
            className={`flex bg-[#C035A2] rounded-full`}
          >
            {
              t("title")
            }
          </Button>} whatIs='AddRestaurant' />
        </div>
      }




    </div>

  );
};

export default SectionHeader;

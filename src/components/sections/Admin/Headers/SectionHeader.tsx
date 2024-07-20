import { roboto } from "@settings/fonts";
import { Button } from "@ui/button";
import { FC } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/sheet";
import Restform from "../Restaurants/RestForm";
interface IProductsPage {
  title: string;
  button: string;
}






const SectionHeader: FC<IProductsPage> = ({ title, button }): JSX.Element => {
  return (
    <div className="h-[73px] w-[1124px] rounded-[14px] bg-[#27283C] p-[22px] flex justify-between ">
      <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{title}</p>


      <Sheet>
        <SheetTrigger>
          <Button
            className={`flex bg-[#C035A2] rounded-full`}
          >
            {button}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="h-[1000px] overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <SheetHeader>
              <SheetTitle>Add Restaurant</SheetTitle>
            </SheetHeader>
            <Restform title={"AddRestaurant"} />
          </div>
        </SheetContent>
      </Sheet>

    </div>

  );
};

export default SectionHeader;
export { Button }
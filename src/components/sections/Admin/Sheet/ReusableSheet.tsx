import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/AdminSheet";
import { useTranslations } from "next-intl";
import Myform from "../../../ui/Myform";
interface IReusableSheet {
  trigger: any;
  whatIs: string;
  id?: any;
}

const ReusableSheet: React.FC<IReusableSheet> = ({ trigger, whatIs, id }): JSX.
Element => {
  let str: string;
  switch (whatIs) {
    case "EditProduct":
      str = `Products.EditProduct`;
      break;
    case "AddProduct":
      str = `Header`;
      break;
    case "EditCategory":
      str = `Category.EditCategory`;
      break;
    case "AddCategory":
      str = `Category.AddCategory`;
      break;
    case "AddRestaurant":
      str = `Restaurants.AddRestaurant`;
      break;
    case "EditRestaurant":
      str = `Restaurants.EditRestaurant`;
      break;
    case "AddOffer":
      str = `Offers.AddOffer`;
      break;
    case "EditOffer":
      str = `Offers.EditOffer`;
      break;

    default:
      str = `Header`;
      break;
  }
  const t = useTranslations(`Admin.${str}.Sheet.imageBlock`);

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <div className="h-[1000px] overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <SheetHeader>
            <SheetTitle>{t("title")}</SheetTitle>
          </SheetHeader>
          <div>
            <Myform whatIs={whatIs} actionId={id} />
          </div>
          <SheetDescription></SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ReusableSheet;

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/AdminSheet";
import { useTranslations } from "next-intl";
import Myform from "../Products/Myform";
interface IAddProductSheet {
  trigger: any;
  whatIs: string;
}

const AddProductSheet: React.FC<IAddProductSheet> = ({ trigger, whatIs }): JSX.Element => {
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
            <Myform whatIs={whatIs} />
          </div>
          <SheetDescription></SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductSheet;

import { Button } from "@ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/AdminSheet";
import { useTranslations } from "next-intl";
import Myform from "../Products/Myform";
interface IAddProductSheet {
  trigger: any;
  whatIs: string;
}

const AddProductSheet: React.FC<IAddProductSheet> = ({ trigger, whatIs }): JSX.Element => {
  let t: any;
  switch (whatIs) {
    case "EditProduct":
      t = useTranslations(`Admin.Products.EditProduct.Sheet.imageBlock`);
      break;
    case "AddProduct":
      t = useTranslations(`Admin.Header.Sheet.imageBlock`);
      break;
    case "EditCategory":
      t = useTranslations(`Admin.Category.EditCategory.Sheet.imageBlock`);
      break;
    case "AddCategory":
      t = useTranslations(`Admin.Category.AddCategory.Sheet.imageBlock`);
      break;
    case "AddRestaurant":
      t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet.imageBlock`);
      break;

    default:
      t = useTranslations(`Admin.Header.Sheet.imageBlock`);
      break;
  }
  

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

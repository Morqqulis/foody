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

  if (whatIs === "EditProduct") {
    t = useTranslations("Admin.Products.EditProduct.Sheet.imageBlock");
  }
  if (whatIs === "AddProduct") {
    t = useTranslations("Admin.Header.Sheet.imageBlock");
  }


  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent>
        <div className="h-[1000px] overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <SheetHeader>
            <SheetTitle>{t("title")}</SheetTitle>
          </SheetHeader>
          <div>
            <Myform whatIs={whatIs} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductSheet;

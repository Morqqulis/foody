import { Button } from "@ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/AdminSheet";
import { useTranslations } from "next-intl";
interface IAddProductSheet {}

const AddProductSheet: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Header");
  const t2 = useTranslations("Admin.Header.Sheet");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={`flex items-center gap-2 rounded-[18px] border-[2px] border-[#C035A2] bg-[#C035A2] px-4 text-[10px] font-bold uppercase leading-[21px] text-white shadow-[0px_4px_4px_0px_rgb(39_174_96)/25%]`}
        >
          <span className={`text-lg font-normal`}>+</span> {t("btn")}
        </Button>
      </SheetTrigger>
      <SheetContent className={`flex items-start bg-[#38394E] p-[30px]`}>
        <SheetHeader className={`text-[#C7C7C7]`}>
          <SheetTitle className={`text-2xl text-[#C7C7C7]`}>{t2("imageBlock.title")}</SheetTitle>
          <SheetDescription className={`text-lg text-[#C7C7C7]`}>{t2("imageBlock.description")}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddProductSheet;

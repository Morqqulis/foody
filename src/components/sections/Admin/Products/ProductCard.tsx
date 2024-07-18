import { FC } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Iprops } from "../../../../app/[locale]/admin/products/data";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/sheet";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui/alert-dialog";
import { useTranslations } from "next-intl";
import Myform from "./Myform";

interface DetailPageProps {
  prod: Iprops;
  index: number;
}
const DetailPage: FC<DetailPageProps> = ({ prod, index }): JSX.Element => {
  const t = useTranslations("Admin.Products");

  return (
    <div className="flex h-[273px] w-[196px] items-center justify-center rounded-[5px] bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%]">
      <div className="h-[245px] w-[163px]">
        <Image src={`https://picsum.photos/id/${index + 20}/160/158`} alt="image" width={160} height={158} />

        <div className="mt-2  w-[100%] whitespace-nowrap ">
          <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{prod.name}</h1>
          <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">Rest name</p>
        </div>

        <div className="flex items-center justify-between">
          <p className=" h-[21px] w-[50.77px]  text-[12px] font-medium leading-[24px] text-[#00B2A9]">${prod.price}</p>
          <div className="flex items-center gap-[10px]">
            <Sheet>
              <SheetTrigger>
                <Pencil size={20} color="#00B2A9" className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription></SheetDescription>
                  <Myform />
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <AlertDialog>
              <AlertDialogTrigger>
                <Trash2 size={20} color="red" className="cursor-pointer" />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t("Modal.title")}</AlertDialogTitle>
                  <AlertDialogDescription>{t("Modal.text")}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{t("Modal.cancelBtn")}</AlertDialogCancel>
                  <AlertDialogAction>{t("Modal.deleteBtn")}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

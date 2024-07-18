import { FC } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Iprops } from "./data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ui/sheet";

interface DetailPageProps {
  prod: Iprops;
  index: number;
}
const DetailPage: FC<DetailPageProps> = ({ prod, index }): JSX.Element => {
  return (
    <div className="flex h-[273px] w-[196px] items-center justify-center rounded-[5px] bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%]">
      <div className="h-[245px] w-[163px]">
        <Image
          src={`https://picsum.photos/id/${index + 20}/161/158`}
          alt="image"
          width={160}
          height={158}
        />

        <div className="mt-2  w-[100%] whitespace-nowrap ">
          <h1 className="font-roboto h-[32px] w-[100%] text-left  text-[18px] font-medium leading-[24px] text-[#1E1E30]">
            {prod.name}
          </h1>
          <p className="font-roboto text-h1[14px] h-[32px] w-[100%] text-left font-medium leading-[24px]  text-[#8E8E93]">
            Rest name
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-roboto h-[21px] w-[50.77px] text-left text-[12px] font-medium leading-[24px] text-[#00B2A9]">
            ${prod.price}
          </p>
          <div className="flex items-center gap-[10px]">
            <Sheet>
              <SheetTrigger>
                <Pencil size={20} color="#00B2A9" className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="w-[948px] sm:w-[1000px]">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Trash2 size={20} color="red" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

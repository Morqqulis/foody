import { Button } from "@ui/button";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Isearchbar {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar: React.FC<Isearchbar> = ({ setShowModal }): JSX.Element => {
  const t = useTranslations("Header");
  return (
    <div
      className={`absolute right-[350px] top-20 z-10 box-border flex h-[319px]  w-[509px] flex-col justify-between rounded-lg border border-[#f7f6fc] bg-white shadow-xl`}
    >
      <div className="h-[80%] overflow-auto">
        <div onClick={() => setShowModal(false)} className="flex h-[25%] cursor-pointer gap-[40px] border-b-[1px] p-[24px] hover:bg-slate-300">
          <Image src={""} alt="image" width={59} height={37} className="h-[37px] w-[59px] rounded-lg" />{" "}
          <div className="flex flex-col">
            <h2 className="text-[14px] font-bold leading-[16px] text-[#2B3043]">Title</h2>{" "}
            <p className=" text-[14px] leading-[16px]  text-[#2B3043]">desc</p>
          </div>
        </div>
      </div>
      <div className="flex h-[20%] items-center justify-center">
        <Button onClick={() => setShowModal(false)} variant="ghost" className="flex items-center gap-1 text-lg">
          {t("more")} <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;

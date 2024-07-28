"use client";
import { headerModalData } from "@data/data";
import { Button } from "@ui/button";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Isearchbar {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
}

const Searchbar: React.FC<Isearchbar> = ({ setShowModal, value }): JSX.Element => {
  const [filteredValues, setFilteredValues] = useState([]);

  useEffect(() => {
    const filteredValue = headerModalData.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredValues(filteredValue);
  }, [value]);

  const t = useTranslations("Header");
  return (
    <div
      className={`absolute right-[350px] top-20 z-10 box-border flex h-[319px]  w-[509px] flex-col justify-between rounded-lg border border-[#f7f6fc] bg-white shadow-xl`}
    >
      <div className="h-[80%] overflow-auto">
        {filteredValues.map((product) => (
          <div
            key={product.id}
            onClick={() => setShowModal(false)}
            className="flex h-[25%] cursor-pointer gap-[40px] border-b-[1px] p-[24px] hover:bg-slate-300"
          >
            <Image src={product.img_url} alt="image" width={59} height={37} className="h-[37px] w-[59px] rounded-lg" />
            <div className="flex flex-col">
              <h2 className="text-[14px] font-bold leading-[16px] text-[#2B3043]">{product.name}</h2>{" "}
              <p className=" text-[14px] leading-[16px]  text-[#2B3043]">{product.description}</p>
            </div>
          </div>
        ))}
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

import Image from "next/image";
import { FC } from "react";

type AsideElements = {
  element: {
    icon: string;
    title: string;
    mt?: string;
  };
};

const AsideElement: FC<AsideElements> = ({ element }): JSX.Element => {
  return (
    <div
      key={element.title}
      className={`mb-[8px] flex h-[40px] w-[200px] cursor-pointer items-center gap-[26px]  pl-[18px] hover:bg-[#d578f2] ${element.mt && "mt-[20px]"}`}
    >
      <Image src={element.icon} width={24} height={24} alt={element.title} />

      <p className="font-roboto h-[18px] w-[138px] text-left text-[14px] font-medium leading-[21px] tracking-[0.1px] text-[#F2F2F2DE]">
        {element.title}
      </p>
    </div>
  );
};

export default AsideElement;

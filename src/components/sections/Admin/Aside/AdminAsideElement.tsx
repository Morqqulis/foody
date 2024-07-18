import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type AsideElements = {
  element: {
    icon: string;
    mt?: string;
    href: string;
  };
  title: string;
};

const AdminAsideElement: FC<AsideElements> = ({ element, title }): JSX.Element => {
  return (
    <Link
      href={element.href}
      className={`mb-[8px] flex h-[40px] w-[200px] cursor-pointer items-center gap-[26px]  pl-[18px] hover:bg-[#d578f2] ${element.mt && "mt-[20px]"}`}
    >
      <Image src={element.icon} width={24} height={24} alt={title} />

      <p className=" h-[18px] w-[138px]  text-sm font-medium leading-[21px]  text-[#F2F2F2DE]">{title}</p>
    </Link>
  );
};

export default AdminAsideElement;

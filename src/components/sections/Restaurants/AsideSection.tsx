import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { FC } from "react";

type UserAsideElement = {
  element?: {
    icon: string;
    mt?: string;
    href: string;
  };
  title: string;
  whatIs: string;
};

const UserAsideRestaurants: FC<UserAsideElement> = ({ element, title, whatIs }): JSX.Element => {
  return (
    <Link
      href={element?.href ?? "#"} 
      className={`mb-[8px] flex h-[40px] w-[200px] cursor-pointer items-center gap-[26px]  pl-[18px] ${whatIs === "admin" && "hover:bg-[#d578f2]"} ${element?.mt && "mt-[20px]"}`}
    >
      {element && <Image src={element.icon} width={24} height={24} alt={title} />}

      <p className={`h-[18px] w-[138px]  text-sm font-medium leading-[21px]   ${whatIs === "admin" ? "text-[#F2F2F2DE]" : "text-[#828282]"}`}>
        {title}
      </p>
    </Link>
  );
};

export default UserAsideRestaurants;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import Image from "next/image";
import { account } from "@libs/appwrite/config";
import { headerUserData } from "@data/data";
import Link from "next/link";

const DrapDown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"text-black"}>
        <Image className={`h-auto min-w-[50px]`} src={"/Header/profileIcon.png"} width={60} height={40} alt="Icon" style={{width: "60px", height: "40px"}}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`flex flex-col px-5 py-5`}>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        {headerUserData.map(({ id, label, path }) => (
          <DropdownMenuItem key={id} className="cursor-pointer border-b border-b-gray-7 last:border-b-0 text-black text-base w-full py-2">
            <Link href={path}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DrapDown;

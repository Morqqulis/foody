import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import React, { FC } from "react";
import Image from "next/image";
import { account } from '@libs/appwrite/config'

const DrapDown: FC = () => {
    
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"text-black"}>
        <Image className={`min-w-[50px] h-auto`} src={"/Header/profileIcon.png"} width={60} height={40} alt="Icon" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer border-b">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer border-b">Your Basket</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer  border-b">Your Orders</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer  border-b">Checkout</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DrapDown;

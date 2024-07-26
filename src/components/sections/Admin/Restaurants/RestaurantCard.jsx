import React from "react";
import { Pencil, Trash2 } from "lucide-react";

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
import Image from "next/image";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
const RestaurantCard = ({ prop }) => {
  return (
    <div className="relative flex h-[83px] w-[290px] items-center justify-center rounded bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] ">
      <Image src={prop.image} alt="image" width={80} height={80} className="ml-5px" />
    
      <div className="mt-2  w-[100%] whitespace-nowrap  px-10 ">
        <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{prop.name}</h1>
        <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">{prop.cuisine}</p>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Trash2 size={20} color="red" className=" absolute right-0 top-0 cursor-pointer" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ReusableSheet trigger={<Pencil size={20} color="#00B2A9" className="cursor-pointer" />} whatIs="EditRestaurant" />
      </div>
    </div>
  );
};

export default RestaurantCard;

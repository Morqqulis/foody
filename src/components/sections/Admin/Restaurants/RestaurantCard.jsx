import React from "react";
import { Pencil } from "lucide-react";

import Image from "next/image";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import DeleteModal from "../DeleteModal/DeleteModal";
const RestaurantCard = ({ prop }) => {
  return (
    <div className="relative flex h-[83px] w-[290px] items-center justify-center rounded bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] ">
      {prop?.image && <Image src={prop.image} alt="image" width={80} height={80} className="ml-5px" />}

      <div className="mt-2  w-[100%] whitespace-nowrap  px-10 ">
        <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{prop.name}</h1>
        <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">{prop.cuisine}</p>
      </div>
      <div>
        <DeleteModal collectionId={prop.$collectionId} deletedId={prop.$id} />
        <ReusableSheet trigger={<Pencil size={20} color="#00B2A9" className="cursor-pointer" />} whatIs="EditRestaurant" id={prop.$id} />
      </div>
    </div>
  );
};

export default RestaurantCard;

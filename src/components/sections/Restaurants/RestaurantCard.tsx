import Image from "next/image";
import React, { FC } from "react";

interface IRestCard {
  data: {
    id: number;
    image: string;
    name: string;
    description: string;
    deliveryPrice: number;
    deliveryMin: number;
    // new_item?: boolean;
  };
}

const RestaurantCard: FC<IRestCard> = ({ data }): JSX.Element => {
  // const { image, title, deliveryMin, deliveryPrice, description, new_item } = data

  return (
    <div className="relative  flex h-[345px] w-[200px] justify-center rounded-[5px] bg-white" style={{ boxShadow: "0px 0px 5px 3px #00000040" }}>
      <div className="absolute left-0 top-0 flex h-[27px] w-[53px] items-center justify-center bg-[#D63626] text-[12px] text-white">New</div>

      <div className="flex h-full w-[163px] flex-col justify-between pb-4 pt-4">
        <Image src={data.image} alt="image" width={160} height={158} />
        <div className="mt-2  w-[100%] whitespace-nowrap ">
          <p className=" h-[32px] w-full   text-lg font-medium leading-[24px] text-[#1E1E30]">{data.name}</p>
          <p className=" h-[32px] w-full overflow-hidden text-sm  font-medium leading-[24px]  text-[#8E8E93]">asdasd</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex w-2/4 justify-items-start gap-2">
            <p className=" h-[21px] w-[50.77px]  text-[12px] font-medium leading-[24px]">${data.deliveryPrice}</p>
            <p>Delivery</p>
          </div>
          <div className=" flex items-center gap-[10px] rounded-[30px] bg-[#D63626] p-1 text-white">{data.deliveryMin} Min</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

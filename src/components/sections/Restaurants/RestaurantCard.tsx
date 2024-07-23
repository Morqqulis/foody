import Image from 'next/image'
import React, { FC } from 'react'

interface IRestCard {
    data: {
        id: number;
        image: string;
        title: string;
        description: string;
        deliveryPrice: number;
        deliveryMin: number;
        new_item?: boolean;
    }
}

const RestaurantCard: FC<IRestCard> = ({ data }): JSX.Element => {
    const { image, title, deliveryMin, deliveryPrice, description, new_item } = data
    return (
        <div className="flex  h-[345px] w-[200px] relative justify-center rounded-[5px] bg-white" style={{ boxShadow: '0px 0px 5px 3px #00000040' }}>
            {new_item && 
                <div className='w-[53px] h-[27px] bg-[#D63626] absolute top-0 left-0 text-white flex items-center justify-center text-[12px]'>New</div>
            }
            <div className="h-full w-[163px] flex justify-between flex-col pt-4 pb-4">
                <Image src={image} alt="image" width={160} height={158} />
                <div className="mt-2  w-[100%] whitespace-nowrap ">

                    <p className=" h-[32px] w-full   text-lg font-medium leading-[24px] text-[#1E1E30]">{title}</p>
                    <p className=" h-[32px] w-full text-sm overflow-hidden  font-medium leading-[24px]  text-[#8E8E93]">{description.substring(0, 40) }</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex justify-items-start w-2/4 gap-2'>
                        <p className=" h-[21px] w-[50.77px]  text-[12px] font-medium leading-[24px]">${deliveryPrice}</p>
                        <p>Delivery</p>
                    </div>
                    <div className=" bg-[#D63626] text-white rounded-[30px] p-1 flex items-center gap-[10px]">{deliveryMin} Min</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
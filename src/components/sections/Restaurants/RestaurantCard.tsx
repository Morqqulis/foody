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
    }
}

const RestaurantCard: FC<IRestCard> = ({ data }): JSX.Element => {
    const { image, title, deliveryMin, deliveryPrice, description } = data
    return (
        // <div className='w-[235px] bg-slate-100'>
        //     <Image className=' overflow-hidden bg-cover bg-center' src={image} alt={title} width={240} height={130} />
        //     <div>
        //         <p>{title}</p>
        //         <p>{description}</p>
        //         <div>
        //             <div>
        //                 <span>${deliveryPrice}</span>
        //                 <p>Delivery</p>
        //             </div>
        //             <div>{deliveryMin} Min</div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex bg-zinc-600 h-[345px] w-[200px] items-center justify-center rounded-[5px] bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%]">
            <div className="h-[245px] w-[163px]">
                <Image src={`https://picsum.photos/id//160/158`} alt="image" width={160} height={158} />

                <div className="mt-2  w-[100%] whitespace-nowrap ">
                    <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{data.title}</h1>
                    <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">Rest name</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className='flex justify-start'>
                        <p className=" h-[21px] w-[50.77px]  text-[12px] font-medium leading-[24px] text-[#00B2A9]">${data.deliveryPrice}</p>
                        <p>Delivery</p>
                    </div>
                    <div className=" bg-[#D63626] rounded-[30px] p-1 flex items-center gap-[10px]">
                        <div className=''>{deliveryMin} Min</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
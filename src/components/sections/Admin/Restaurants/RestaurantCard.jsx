import React from 'react'
import { Trash2 } from "lucide-react";


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
import Image from 'next/image'




const RestaurantCard = ({ prop }) => {
    return (

        <div className='flex h-[83px] w-[290px] items-center justify-center rounded bg-white shadow-[0px_4px_4px_0px_rgb(57_57_57)/25%] relative '>


            <Image src={prop.img_url} alt="image" width={80} height={80} className='ml-5px' />

            <div className="mt-2  w-[100%] whitespace-nowrap  px-10 ">
                <h1 className=" h-[32px] w-[100%]   text-lg font-medium leading-[24px] text-[#1E1E30]">{prop.name}</h1>
                <p className=" h-[32px] w-[100%] text-sm  font-medium leading-[24px]  text-[#8E8E93]">{prop.cuisine}</p>
            </div>

            <AlertDialog >
                <AlertDialogTrigger asChild>
                    <Trash2 size={20} color='red' className=' cursor-pointer absolute top-0 right-0' />
                </AlertDialogTrigger>
                <AlertDialogContent className='flex flex-col items-center justify-center w-[px] h-[400px'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure it’s deleted ?</AlertDialogTitle>
                        <AlertDialogDescription >
                            Attention! If you delete this restaurant, it will not come back...?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='bg-red'>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction >Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


        </div>


    )

}

export default RestaurantCard
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
        <div className='w-[235px] bg-slate-600'>
            <Image src={image} alt={title} width={170} height={160} />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <div>
                    <div>
                        <span>${deliveryPrice}</span>
                        <p>Delivery</p>
                    </div>
                    <div>{deliveryMin} Min</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
import Image from 'next/image';
import React, { FC } from 'react'

type RestAside = {
    id: number;
    icon: string;
    title: string
}


const AsideElements: RestAside[] = [
    {
        id: 0,
        icon: "https://picsum.photos/25/25",
        title: "Chinese",
    },
    {
        id: 1,
        icon: "https://picsum.photos/25/25",
        title: "Sea Food",
    },
    {
        id: 2,
        icon: "https://picsum.photos/25/25",
        title: "FastFood",
    },
    {
        id: 3,
        icon: "https://picsum.photos/25/25",
        title: "Chinese",
    },
    {
        id: 4,
        icon: "https://picsum.photos/25/25",
        title: "Sea Food",
    },
    {
        id: 5,
        icon: "https://picsum.photos/25/25",
        title: "FastFood",
    },
    {
        id: 6,
        icon: "https://picsum.photos/25/25",
        title: "Chinese",
    },
    {
        id: 7,
        icon: "https://picsum.photos/25/25",
        title: "Sea Food",
    },
    {
        id: 8,
        icon: "https://picsum.photos/25/25",
        title: "FastFood",
    },
    {
        id: 3,
        icon: "https://picsum.photos/25/25",
        title: "Chinese",
    },
    {
        id: 4,
        icon: "https://picsum.photos/25/25",
        title: "Sea Food",
    },
    {
        id: 5,
        icon: "https://picsum.photos/25/25",
        title: "FastFood",
    },
    {
        id: 3,
        icon: "https://picsum.photos/25/25",
        title: "Chinese",
    },
    {
        id: 4,
        icon: "https://picsum.photos/25/25",
        title: "Sea Food",
    },
    {
        id: 5,
        icon: "https://picsum.photos/25/25",
        title: "FastFood",
    }
];




const RestAside: FC = (): JSX.Element => {
    return (
        <div className='flex flex-col w-1/5 pt-11 pl-7 pr-7 gap-8 bg-[#F3F4F6] h-full overflow-y-scroll'>
            {AsideElements.map((element) => <div className='flex gap-4 items-center'>
                <Image src={element.icon} alt={element.title} width={25} height={25} />
                <p>{element.title}</p>
            </div>)}
        </div>
    )
}

export default RestAside
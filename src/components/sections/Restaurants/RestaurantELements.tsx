"use client"

import RestaurantCard from '@sections/Restaurants/RestaurantCard';
import UserPagination from '@sections/Paginations/UserPagination';
import React, { useState } from 'react'

type RestaurantsData = {
    id: number;
    image: string;
    title: string;
    description: string;
    deliveryPrice: number;
    deliveryMin: number;
}


const Restaurantsdata: RestaurantsData[] = [
    {
        id: 0,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 1,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 2,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 3,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 4,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 5,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 6,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 7,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 8,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 9,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 10,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 11,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 12,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    },
    {
        id: 13,
        image: "https://picsum.photos/25/25",
        title: "Chinese",
        description: "string",
        deliveryPrice: 57,
        deliveryMin: 5
    }
];


const RestaurantELements = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const perPage = 8
    const firstIndex = (currentPage - 1)* perPage;
    const secondIndex = firstIndex + perPage;
    const filteredCards = Restaurantsdata.slice(firstIndex, secondIndex)

  return (
    <div className='p-4 flex flex-wrap gap-10 w-4/5'>        
        {filteredCards.map((element) => <RestaurantCard key={element.id} data={element}/>)}
        <UserPagination setCurrentPage = {setCurrentPage} dataCount = {Restaurantsdata.length} currentPage = {currentPage} perPage = {perPage} />
    </div>
  )
}

export default RestaurantELements
"use client";

import RestaurantCard from "@sections/Restaurants/RestaurantCard";
import UserPagination from "@sections/Paginations/UserPagination";
import React, { useEffect, useState } from "react";
import { getListDocuments } from "../../../utls/functions";
import { collections } from "@libs/appwrite/config";

type RestaurantsData = {
  id: number;
  image: string;
  title: string;
  description: string;
  deliveryPrice: number;
  deliveryMin: number;
  new_item?: boolean;
};

const Restaurantsdata: RestaurantsData[] = [
  {
    id: 0,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "dddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddd",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 1,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 2,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 3,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 4,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 5,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 6,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 7,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 8,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
  {
    id: 9,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 10,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 11,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 12,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: true,
  },
  {
    id: 13,
    image: "https://picsum.photos/25/25",
    title: "Chinese",
    description: "string",
    deliveryPrice: 57,
    deliveryMin: 5,
    new_item: false,
  },
];

const RestaurantELements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    (async () => {
      const { documents } = await getListDocuments(collections.restaurantsId);
      setRestaurants(documents);
    })();
  }, []);

  const perPage = 8;
  const firstIndex = (currentPage - 1) * perPage;
  const secondIndex = firstIndex + perPage;
  const filteredCards = Restaurantsdata.slice(firstIndex, secondIndex);

  return (
    <div className="flex w-full basis-4/5 flex-wrap gap-10 p-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.name} data={restaurant} />
      ))}
      <UserPagination setCurrentPage={setCurrentPage} dataCount={restaurants.length} currentPage={currentPage} perPage={perPage} />
    </div>
  );
};

export default RestaurantELements;

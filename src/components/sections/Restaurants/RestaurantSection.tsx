"use client";
import { collections } from "@libs/appwrite/config";
import { Button } from "@ui/button";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { getListDocuments } from "../../../utls/functions";
import RestaurantCard from "./RestaurantCard";

interface IRestaurant {
  name: string;
  image: string;
  imageId: string;
  cuisine: string;
  deliveryPrice: string | number;
  deliveryMin: string | number;
  address?: string;
  category: any;
  products: any;
}

interface ICategory {
  name: string;
  slug?: string;
  image: string;
  imageId: string;
}

export const RestaurantSection: FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  //   console.log("Categories: >", categories);
  //   console.log("Restaurans: >", restaurants);

  useEffect(() => {
    (async () => {
      try {
        const categoriesData = (await getListDocuments(collections.categoriesId)).documents;
        setCategories(categoriesData);

        if (!selectedCategory) {
          const restaurantsData = (await getListDocuments(collections.restaurantsId)).documents;
          setRestaurants(restaurantsData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCategory]);


  
  const handleSetAllRestaurants = async () => {
    try {
      const { documents } = await getListDocuments(collections.restaurantsId);
      setRestaurants(documents);
      setSelectedCategory(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    const getCategoryRestaurants = categories?.find((category) => category?.$id === categoryId)?.restaurants;
    setSelectedCategory(categoryId);
    setRestaurants(getCategoryRestaurants);
  };

  return (
    <div className="container flex items-start gap-10 py-5">
      <div className="flex h-[calc(90vh-130px)] w-full basis-1/5 flex-col gap-8 overflow-y-auto bg-gray-7 px-5 py-10">
        <Button
          className={`flex w-full items-center  gap-4  text-xl font-medium text-mainBlack hover:bg-red-400 ${selectedCategory === null ? "bg-mainRed text-white" : ""}`}
          type={"button"}
          aria-label={"food category"}
          variant={"ghost"}
          onClick={handleSetAllRestaurants}
        >
          All
        </Button>

        {categories?.map((category) => (
          <Button
            className={`flex w-full items-center justify-start gap-4 text-left text-xl font-medium text-mainBlack hover:bg-red-400  ${selectedCategory === category.$id ? "bg-mainRed text-white" : ""}`}
            type={"button"}
            aria-label={"food category"}
            key={category.$id}
            variant={"ghost"}
            onClick={() => handleCategoryClick(category.$id)}
          >
            <Image className={`h-[25px] w-[25px] rounded-full`} src={category.image} alt={category.name} width={30} height={30} />
            <p>{category.name}</p>
          </Button>
        ))}
      </div>
      <div
        className={`grid h-full w-full grow basis-4/5 grid-cols-1 gap-5 overflow-y-auto p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10`}
      >
        {restaurants?.length === 0 && (
          <Vortex
            wrapperClass={`col-span-4 w-full row-span-4 flex flex-col items-center justify-center`}
            height={500}
            width={500}
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            colors={["#D63626", "green", "blue", "yellow", "orange", "purple"]}
            // color={"#D63626"}
          />
        )}
        {restaurants?.map((restaurant) => <RestaurantCard key={restaurant.$id} data={restaurant} />)}
      </div>
    </div>
  );
};

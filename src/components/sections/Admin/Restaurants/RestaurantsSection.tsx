"use client";
import { collections } from "@libs/appwrite/config";
import { getListDocuments } from "../../../../utls/functions";
import { FC, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
interface IRestaurantsSection {}

const RestaurantsSection: FC = (): JSX.Element => {
  const [restaurans, setRestaurans] = useState([]);

  useEffect(() => {
    (async () => {
      const { documents } = await getListDocuments(collections.restaurantsId);
      setRestaurans(documents);
    })();
  }, []);

  return (
    <section className="flex w-[1124px] flex-col items-center justify-center px-0 pt-[52px]  ">
      <div className=" flex flex-wrap justify-around  gap-[25px]">
        {restaurans.length === 0 && <p>No data</p>}
        {restaurans?.map((restaurant) => <RestaurantCard key={restaurant.$id} prop={restaurant} />)}
      </div>
    </section>
  );
};

export default RestaurantsSection;

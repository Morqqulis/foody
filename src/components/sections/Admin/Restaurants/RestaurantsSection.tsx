"use client";
import { collections } from "@libs/appwrite/config"
import { useEffect, useState } from "react"
import { getListDocuments } from "../../../../utls/functions"
import SectionHeader from "../Headers/SectionHeaders/SectionHeader"
import RestaurantCard from "./RestaurantCard"

interface Ia {}

const RestaurantsSection: React.FC = (): JSX.Element => {
  const [restaurans, setRestaurans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    (async () => {
      const { documents } = await getListDocuments(collections.restaurantsId);
      selectedCategory === "All" ? setRestaurans(documents) : setRestaurans(documents.filter((doc) => doc.category.$id === selectedCategory));
    })();
  }, [selectedCategory]);

  return (
    <section>
      <SectionHeader title="Restaurants" setSelected={setSelectedCategory} />
      <div className="flex w-[1124px] flex-col items-center justify-center px-0 pt-[52px]  ">
        <div className=" flex flex-wrap justify-around  gap-[25px]">
          {restaurans.length === 0 && <p>No data</p>}
          {restaurans?.map((restaurant) => <RestaurantCard key={restaurant.$id} prop={restaurant} />)}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;

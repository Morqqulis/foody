// import data from "./data";
import { collections } from "@libs/appwrite/config";
import { getDocuments } from "../../../../utls/functions";
import RestaurantCard from "./RestaurantCard";
import { FC } from "react";
interface IRestaurantsSection {}

const RestaurantsSection: FC = async (): Promise<JSX.Element> => {
  const { documents } = await getDocuments(collections.restaurantsId);

  return (
    <section className="flex w-[1124px] flex-col items-center justify-center px-0 pt-[52px]  ">
      <div className=" flex flex-wrap justify-around  gap-[25px]">
        {documents.length === 0 && <p>No data</p>}
        {documents.map((restaurant) => (
          <RestaurantCard key={restaurant.cuisine} prop={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantsSection;

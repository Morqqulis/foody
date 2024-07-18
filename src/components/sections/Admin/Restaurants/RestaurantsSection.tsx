import { NextPage } from "next"
import data from "../../../../app/[locale]/admin/restaurants/data"
import RestaurantCard from "./RestaurantCard"

const RestaurantsSection: NextPage = (): JSX.Element => {

    return (
        <section className="flex w-[1124px] flex-col items-center justify-center px-0 pt-[52px]  ">
            <div className=" flex flex-wrap justify-around  gap-[25px] ">
                {
                    data.map((restaurant) => (
                        <RestaurantCard prop={restaurant} />
                    ))
                }

            </div>

        </section>

    )
        ;



}


export default RestaurantsSection
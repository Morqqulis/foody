import { NextPage } from "next"
import data from "../../../../app/[locale]/admin/restaurants/data"
import RestaurantCard from "./RestaurantCard"
import Pagination from "../Products/Pagination";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui/sheet";
import Myform from "../Products/Myform";



const RestaurantsSection: NextPage = (): JSX.Element => {

    return (
        <section className="flex w-[1124px] flex-col items-center justify-center px-0 pt-[52px]  ">
            <div className=" flex flex-wrap justify-around  gap-[28px] ">
                {
                    data.map((restaurant) => (
                        <RestaurantCard key={restaurant.cuisine} prop={restaurant} />
                    ))
                }

            </div>
            <Pagination />




        </section>

    )
        ;



}


export default RestaurantsSection
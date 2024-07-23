import Cart from "@sections/Restaurants/Cart";
import ProductList from "@sections/Restaurants/ProductList";
import RestaurantsHeader from "@sections/Restaurants/RestaurantsHeader";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  const t = await getTranslations({ locale, namespace: "Restaurants.Metadata" });

  return {
    title: t("title") + " " + id,
    description: t("description"),
  };
}

interface IRestaurantPage {
  params: { locale: string; id: string };
}

const RestaurantPage: NextPage = ({ params: { locale, id } }: IRestaurantPage): JSX.Element => {
  return (
    <main>
      <div className="container">
        <RestaurantsHeader />
        <div className="flex p-4">
          <ProductList />
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default RestaurantPage;

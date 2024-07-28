import Cart from "@sections/Restaurants/Cart";
import ProductList from "@sections/Restaurants/ProductList";
import RestaurantsHeader from "@sections/Restaurants/RestaurantsHeader";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale, slug } }) {
  const t = await getTranslations({ locale, namespace: "Restaurants.Metadata" });

  return {
    title: t("title") + "-" + slug,
    description: t("description"),
  };
}

interface IRestaurantPage {
  params: { locale: string; slug: string };
}

const RestaurantPage: NextPage = ({ params: { locale, slug } }: IRestaurantPage): JSX.Element => {
  return (
    <main>
      <section className={`py-2`}>
        <div className="container">
          <RestaurantsHeader />
          <div className="flex p-4">
            <ProductList slug={slug} />
            <Cart />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantPage;

import RestaurantsHeader from "@sections/Restaurants/RestaurantsHeader";
import RestoranItems from "@sections/Restaurants/RestoranItems";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  const t = await getTranslations({ locale, namespace: "Restaurants.Metadata" });


  return {
    title: t("title") + "-" + id,
    description: t("description"),
  };
}

interface IRestaurantPage {
  params: { locale: string; id: string };
}

const RestaurantPage: NextPage = ({ params: { locale, id } }: IRestaurantPage): JSX.Element => {
  return (
    <main>
      <section className={``}>
        <div className="container">
          <RestaurantsHeader  restId={id}/>
          <RestoranItems restId={id} />
        </div>
      </section>
    </main>
  );
};

export default RestaurantPage;

import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  const t = await getTranslations({ locale, namespace: "Restaurants.Metadata" });

  return {
    title: t("title") + " " + id,
    description: t("description"),
  };
}

interface IRestaurantPage {}

const RestaurantPage: NextPage = (): JSX.Element => {
  return <main>RestaurantPage</main>;
};

export default RestaurantPage;

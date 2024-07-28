import RestaurantsSection from "@sections/Admin/Restaurants/RestaurantsSection";
import { getTranslations } from "next-intl/server";

interface Ipage {}
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Admin.Restaurants.Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

const RestaurantsAdminPage: React.FC = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <RestaurantsSection />
    </main>
  );
};

export default RestaurantsAdminPage;

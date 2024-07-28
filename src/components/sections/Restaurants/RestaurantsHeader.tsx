"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const RestaurantsHeader = () => {
  const t = useTranslations("Header-Restaurants");
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg" alt="Restaurant" width={1372} height={537} />
      </div>
      <div className="flex items-center justify-between bg-gray-7 p-4 shadow">
        <div className="flex items-center">
          <div className="ml-4">
            <h1 className="text-xl font-bold">{t("restaurantName")}</h1>
            <p className="text-gray-500">{t("address")}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-right text-gray-500">{t("cuisine")}</p>
            <p className="text-gray-500">{t("cuisineList")}</p>
          </div>
          <button className="rounded border border-red-500 px-4 py-2 text-red-500">{t("deliveryCost")}</button>
          <button className="rounded bg-red-500 px-4 py-2 text-white" onClick={() => router.back()}>
            {t("goBack")}
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantsHeader;

"use client";

import { collections, databases, dbId } from "@libs/appwrite/config"
import { Query } from "appwrite"
import { Plus } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./Scroll.module.css"

// const products = [
//   { id: 1, name: "Papa John's Pizza Restaurant", price: 7.0, img_url: "https://via.placeholder.com/150" },
//   { id: 2, name: "Papa John's Pizza Restaurant", price: 7.0, img_url: "https://via.placeholder.com/150" },
//   { id: 3, name: "Papa John's Pizza Restaurant", price: 7.0, img_url: "https://via.placeholder.com/150" },
//   { id: 4, name: "Papa John's Pepper Roll", price: 4.29, img_url: "https://via.placeholder.com/150" },
//   { id: 5, name: "Papa John's Pepper Roll", price: 4.29, img_url: "https://via.placeholder.com/150" },
//   { id: 6, name: "Coca Cola", price: 1.0, img_url: "https://via.placeholder.com/150" },
//   { id: 7, name: "Papa Coffee", price: 0.79, img_url: "https://via.placeholder.com/150" },
// ];

const ProductList: React.FC = ({ slug }: { slug: string }) => {
  const t = useTranslations("ProductList");
  const [restaurant, setRestaurant] = useState(null);
  console.log(restaurant);

  useEffect(() => {
    (async () => {
      try {
        const { documents } = await databases.listDocuments(dbId, collections.restaurantsId, [Query.equal("name", slug)]);
        setRestaurant(documents);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slug]);


  

  return (
    <div className=" basis-3.5/6 w-full">
      <div className="ml-50 mr-6 mt-4 flex-1 bg-gray-100 p-10">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-950">{t("title")}</h2>
        <div className={`${styles.customScrollbar} space-y-4`}>
          {restaurant?.products?.length > 0 &&
            restaurant?.products?.map((product: any) => (
              <div key={product.id} className="flex items-center justify-between rounded bg-white p-4 shadow">
                <div className="flex items-center">
                  <Image className="h-20 w-20 rounded-lg" src={product.img_url} alt={product.name} width={80} height={80} />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{t("description")}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                  <button className="ml-4 text-green-500">
                    <Plus />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

"use client";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { collections, databases, dbId, ID } from "@libs/appwrite/config";
import { getDocuments } from "../../../utls/functions";

interface IproductsSection {
  restId: string;
}

const RestoranItems: React.FC<IproductsSection> = ({ restId }): JSX.Element => {
  const [basket, setBasket] = useState([]);
  const [basketId, setBasketId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userId");
    setUserId(token || "");
    if (!userId) return;

    (async () => {
      const user = await getDocuments(collections.userId, userId);

      const basketIdinUser = user.basket.length > 0 && (await user.basket[0].$id);

      if (basketIdinUser) {
        setBasketId(basketIdinUser);
        const prevBasket = user.basket[0].productsList;
        setBasket(JSON.parse(prevBasket));
      }
    })();
  }, [userId]);

  useEffect(() => {
    if (basket.length > 0) {
      const strBasket = JSON.stringify(basket);
      (async () => {
        if (basketId) {
          await databases.updateDocument(dbId, collections.basketId, basketId, { productsList: strBasket });
        } else {
          const newBasket = await databases.createDocument(dbId, collections.basketId, ID.unique(), { user: userId, productsList: strBasket });
          setBasketId(newBasket.$id);
        }
      })();
    }
  }, [basket, userId, basketId]);

  return (
    <div className="flex p-4">
      <ProductList restId={restId} setBasket={setBasket} />
      <Cart setBasket={setBasket} initialCartItems={basket} />
    </div>
  );
};

export default RestoranItems;

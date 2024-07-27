"use client";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { collections, databases, dbId } from "@libs/appwrite/config";
import { getDocuments } from "../../../utls/functions";

interface IproductsSection {
  restId: string;
}

const RestoranItems: React.FC<IproductsSection> = ({ restId }): JSX.Element => {
  const [basket, setBasket] = useState([]);
  const [basketId, setBasketId] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const user = await getDocuments(collections.userId, userId);
      const basketIdinUser = await user.basket.$id;

      if (basketIdinUser) {
        setBasketId(basketIdinUser);
        const prevBasket = user.basket.productsList;
        setBasket(JSON.parse(prevBasket));
      }
    })();
  }, []);

  useEffect(() => {
    if (basket.length > 0) {
      const strBasket = JSON.stringify(basket);
      (async () => await databases.updateDocument(dbId, collections.basketId, basketId, { productsList: strBasket }))();
    }
  }, [basket]);

  return (
    <div className="flex p-4">
      <ProductList restId={restId} setBasket={setBasket} />
      <Cart setBasket={setBasket} initialCartItems={basket} />
    </div>
  );
};

export default RestoranItems;

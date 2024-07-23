"use client";

import React, { useState, useEffect } from "react";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import styles from "./basket.module.css";
import { useTranslations } from "next-intl";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Papa John's Pizza Restaurant",
      price: 15.8,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: 15.8,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Papa Coffee",
      price: 15.8,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Cheeseburger",
      price: 15.8,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Papa Coffee",
      price: 15.8,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
  ]);

  const [totalItems, setTotalItems] = useState(0);
  const t = useTranslations("Basket");

  useEffect(() => {
    const total = basketItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [basketItems]);

  const handleQuantityChange = (id, delta) => {
    setBasketItems((prevItems) => {
      return prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
    });
  };

  const handleDelete = (id) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section>
      <div className="container">
        <div className="mt-4 flex  justify-end  ">
          <div className="w-3/4 bg-gray-7  p-10">
            <div className="mb-6 flex flex-col">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-gray-950">{t("title")}</h1>
              </div>
              <div className="mt-2 flex items-center">
                <ShoppingCart className="h-5 w-5 text-red-600" />
                <h5 className="ml-2 text-red-600">
                  {totalItems} {t("items")}
                </h5>
              </div>
            </div>
            <div className={styles.customScrollbar}>
              {basketItems.map((item) => (
                <div key={item.id} className="mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
                  <div className="flex items-center">
                    <Image className="h-20 w-20" src={item.img_url} alt={item.name} width={80} height={80} />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
                    >
                      <Trash2 className="h-5 w-5 text-red-600 hover:text-red-700" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-full bg-red-600 p-4 shadow-md">
              <button className="rounded-lg bg-red-600 px-4 py-2 text-white">{t("checkout")}</button>
              <span className="rounded-3xl bg-white px-4 py-2 text-xl font-semibold text-red-600">$ {totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;

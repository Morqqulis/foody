
"use client";

import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import styles from './Basket.module.css';
import { useTranslations } from 'next-intl';

const Basket = () => {
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Papa John's Pizza Restaurant",
      price: 15.80,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: 15.80,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Papa Coffee",
      price: 15.80,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Cheeseburger",
      price: 15.80,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Papa Coffee",
      price: 15.80,
      quantity: 2,
      img_url: "https://via.placeholder.com/150",
    },
  ]);

  const [totalItems, setTotalItems] = useState(0);
  const  t = useTranslations('Basket');

  useEffect(() => {
    const total = basketItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [basketItems]);

  const handleQuantityChange = (id, delta) => {
    setBasketItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
    });
  };

  const handleDelete = (id) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex justify-end  mt-4  ">
      <div className="w-3/4 p-10  bg-gray-7">
        <div className="flex flex-col mb-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-950">{t('title')}</h1>
          </div>
          <div className="flex items-center mt-2">
            <ShoppingCart className="w-5 h-5 text-red-600" />
            <h5 className="ml-2 text-red-600">{totalItems} {t('items')}</h5>
          </div>
        </div>
        <div className={styles.customScrollbar}>
          {basketItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 mb-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center">
                <Image className="w-20 h-20" src={item.img_url} alt={item.name} width={80} height={80} />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ml-2"
                >
                  <Trash2 className="w-5 h-5 text-red-600 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center p-4 mt-4 bg-red-600 shadow-md rounded-full">
          <button className="px-4 py-2 text-white bg-red-600 rounded-lg">
            {t('checkout')}
          </button>
          <span className="px-4 py-2 text-xl font-semibold bg-white text-red-600 rounded-3xl">
           $ {totalAmount.toFixed(2) }
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket;

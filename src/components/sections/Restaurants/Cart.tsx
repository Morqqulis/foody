"use client";

import { FC, useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import styles from './Scroll.module.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img_url: string;
}

const initialCartItems: CartItem[] = [
  { id: 1, name: "Papa John's Pizza Restaurant", price: 15.0, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  { id: 2, name: "Papa John's Cola Restaurant", price: 1.5, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  { id: 3, name: "Papa John's Pizza Restaurant", price: 15.0, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  { id: 4, name: "Papa John's Cola Restaurant", price: 1.5, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  { id: 3, name: "Papa John's Pizza Restaurant", price: 15.0, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  { id: 4, name: "Papa John's Cola Restaurant", price: 1.5, quantity: 2, img_url: 'https://via.placeholder.com/150' },
  
];

const Cart: FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
   
        <div className="mt-4 flex justify-end">
        <div className="w-397px h-547px bg-gray-7 p-10">
            <div className="mb-6 flex flex-col">
              
              <div className="mt-2 flex items-center text-xl">
                <ShoppingCart className="h-7 w-7 text-red-600 " />
                <h5 className="ml-2 text-red-600">
                  {cartItems.length} Items
                </h5>
              </div>
            </div>
            <div className={styles.customScrollbar}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
                >
                  <div className="flex items-center">
                    <Image
                      className="h-20 w-20 rounded-lg"
                      src={item.img_url}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
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
              <button className="rounded-lg bg-red-600 px-4 py-2 text-white">Checkout</button>
              <span className="rounded-3xl bg-white px-4 py-2 text-xl font-semibold text-red-600">
                $ {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
     
  );
};

export default Cart;

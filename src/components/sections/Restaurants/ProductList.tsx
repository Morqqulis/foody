"use client";

import { FC } from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import styles from './Scroll.module.css';
import { useTranslations } from 'next-intl';

const products = [
  { name: "Papa John's Pizza Restaurant", price: 7.0, img_url: 'https://via.placeholder.com/150' },
  { name: "Papa John's Pizza Restaurant", price: 7.0, img_url: 'https://via.placeholder.com/150' },
  { name: "Papa John's Pizza Restaurant", price: 7.0, img_url: 'https://via.placeholder.com/150' },
  { name: "Papa John's Pepper Roll", price: 4.29, img_url: 'https://via.placeholder.com/150' },
  { name: "Papa John's Pepper Roll", price: 4.29, img_url: 'https://via.placeholder.com/150' },
  { name: 'Coca Cola', price: 1.0, img_url: 'https://via.placeholder.com/150' },
  { name: 'Papa Coffee', price: 0.79, img_url: 'https://via.placeholder.com/150' },
];

const ProductList: FC = () => {
  const t = useTranslations('ProductList');

  return (
    <div className="container">
      <div className="flex-1 p-10 bg-gray-100 mr-6 mt-4 ml-50">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-950">{t('title')}</h2>
        <ul className={`${styles.customScrollbar} space-y-4`}>
          {products.map((product, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-white rounded shadow">
              <div className="flex items-center">
                <Image
                  className="h-20 w-20 rounded-lg"
                  src={product.img_url}
                  alt={product.name}
                  width={80}
                  height={80}
                />
                <div className="ml-4">
                  <h3 className="text-md font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{t('description')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                <button className="ml-4 text-green-500">
                  <Plus />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;

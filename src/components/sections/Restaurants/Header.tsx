import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Header-Restaurants');

  return (
    <div className="container">
      <div className="flex justify-center p-4">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg" 
          alt="Restaurant" 
          width={1372} 
          height={537} 
        />
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-7 shadow">
        <div className="flex items-center">
          <div className="ml-4">
            <h1 className="text-xl font-bold">{t('restaurantName')}</h1>
            <p className="text-gray-500">{t('address')}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-gray-500 text-right">{t('cuisine')}</p>
            <p className="text-gray-500">{t('cuisineList')}</p>
          </div>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded">
            {t('deliveryCost')}
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            {t('goBack')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

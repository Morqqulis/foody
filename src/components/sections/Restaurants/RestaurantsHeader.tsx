'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { getDocuments } from '../../../utls/functions';
import { collections } from '@libs/appwrite/config';
import { useEffect, useState } from 'react';

const RestaurantsHeader = ({ restId }) => {
  const t = useTranslations('Header-Restaurants');
  const [restaurant, setRestaurant] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const getRest = async () => {
      const rest = await getDocuments(collections.restaurantsId, restId);
      setRestaurant(rest);
    };
    getRest();
  }, [restId]);

  return (
    <>
      <div className="flex justify-center">
        {restaurant.image && (
          <Image
            src={restaurant.image}
            alt="Restaurant"
            width={1372}
            height={537}
            className="max-h-[537px] max-w-[1200px] rounded-xl transition-opacity duration-700 ease-in"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>

      <div className="flex items-center justify-between bg-gray-7 p-4 shadow transition-transform duration-300 hover:scale-105">
        <div className="flex items-center">
          <div className="ml-4">
            <h1 className="text-xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-500">{restaurant.address}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-right text-gray-500">{t('cuisine')}</p>
            <p className="text-gray-500">{restaurant.cuisine}</p>
          </div>
          <div className="rounded border border-red-500 px-4 py-2 text-red-500">
            ${restaurant.deliveryPrice} {t('deliveryCost')}
          </div>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
            onClick={() => router.back()}
          >
            {t('goBack')}
          </button>
        </div>
      </div>
    </>
  );
};

export default RestaurantsHeader;

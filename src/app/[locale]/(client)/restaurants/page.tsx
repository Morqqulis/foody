import { NextPage } from 'next';
import { getTranslations } from 'next-intl/server';
import RestaurantsHeader from '../../../../components/sections/Restaurants/RestaurantsHeader';
import ProductList from '../../../../components/sections/Restaurants/ProductList';
import Cart from '../../../../components/sections/Restaurants/Cart';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Restaurants.Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const RestaurantsPage: NextPage = (): JSX.Element => {
  return (
    
    <div className="min-h-screen">
      <RestaurantsHeader />
      <main className="container flex p-4">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
};

export default RestaurantsPage;

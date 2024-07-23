'use client';

import { FC, useState } from 'react';
import { PlusCircle, Edit, Trash } from 'lucide-react';
import Image from 'next/image'; 
import CategoryModal from './CategoryModal';
import { useTranslations } from 'next-intl';

type Category = {
  id: number;
  image: string;
  name: string;
  slug: string;
};

const initialCategories: Category[] = [
  { id: 9177, image: 'https://placehold.jp/150x150.png', name: 'Pizza', slug: 'yummy-pizza' },
  { id: 9178, image: 'https://placehold.jp/150x150.png', name: 'Sandvic', slug: 'sendvic' },
  { id: 9179, image: 'https://placehold.jp/150x150.png', name: 'Fries', slug: 'fries' },
  { id: 9177, image: 'https://placehold.jp/150x150.png', name: 'Pizza', slug: 'yummy-pizza' },
  { id: 9178, image: 'https://placehold.jp/150x150.png', name: 'Sandvic', slug: 'sendvic' },
  { id: 9179, image: 'https://placehold.jp/150x150.png', name: 'Fries', slug: 'fries' },
];

const AdminRightSidebar: FC = () => {
  const t = useTranslations('Admin.Category');
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | undefined>(undefined);

  const openModal = (category?: Category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleSaveCategory = (category: { id?: number; name: string; slug: string }) => {
    if (category.id) {
      setCategories(categories.map(c => (c.id === category.id ? { ...c, ...category } : c)));
    } else {
      setCategories([...categories, { ...category, id: Date.now(), image: '/images/default.png' }]);
    }
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="flex flex-col h-screen w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{t('title')}</h2>
        <button onClick={() => openModal()} className="bg-purple-700 text-white p-2 rounded-md">
          <PlusCircle className="inline mr-2" /> {t('addCategory')}
        </button>
      </div>
      <div className="overflow-y-auto bg-gray-100">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">{t('id')}</th>
              <th className="py-2 px-4 border-b">{t('image')}</th>
              <th className="py-2 px-4 border-b">{t('name')}</th>
              <th className="py-2 px-4 border-b">{t('slug')}</th>
              <th className="py-2 px-4 border-b">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-2 px-4 border-b">{category.id}</td>
                <td className="py-2 px-4 border-b">
                  <Image src={category.image} alt={category.name} width={32} height={32} /> 
                </td>
                <td className="py-2 px-4 border-b">{category.name}</td>
                <td className="py-2 px-4 border-b">{category.slug}</td>
                <td className="py-2 px-4 border-b ">
                  <button onClick={() => openModal(category)} className="text-blue-500 hover:text-blue-700 mx-1 ">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)} className="text-red-500 hover:text-red-700 mx-1">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveCategory}
        category={currentCategory}
      />
    </div>
  );
};

export default AdminRightSidebar;

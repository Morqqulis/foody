"use client";
import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AddOfferModal from "@sections/Admin/Offers/AddOfferModal";
import EditOfferModal from "@sections/Admin/Offers/EditOfferModal";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import { Edit2, Trash } from "lucide-react";

interface Offer {
  id: number;
  image: string;
  title: string;
  description: string;
}

const OffersPage: NextPage = (): JSX.Element => {
  const t = useTranslations("OffersPage");

  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 9177,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwXtAOL0wCTsYOlr33hJX33swJ5ItWUmeRA&s",
      title: "Do you like Pizza at Papa's?",
      description: "Yummy thin pizza with chicken",
    },
    {
      id: 9178,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwXtAOL0wCTsYOlr33hJX33swJ5ItWUmeRA&s",
      title: "Do you like Pizza at Papa's?",
      description: "Yummy thin pizza with pepperoni",
    },
    {
      id: 9179,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwXtAOL0wCTsYOlr33hJX33swJ5ItWUmeRA&sg",
      title: "Do you like Pizza at Papa's?",
      description: "Yummy thin pizza with meat",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (offer: Offer) => {
    setCurrentOffer(offer);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const addOffer = (offer: Offer) => {
    setOffers([...offers, offer]);
  };

  const editOffer = (updatedOffer: Offer) => {
    setOffers(offers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer)));
  };

  const deleteOffer = (offerId: number) => {
    setOffers(offers.filter((offer) => offer.id !== offerId));
  };

  return (
    <div className="flex min-h-screen text-white">
      <div className="flex-1 p-6">
        <SectionHeader title={t('title')}/>
          <button
            onClick={openAddModal}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            {t('addOffer')}
          </button>
       
        <div className="overflow-y-auto bg-gray-100">
          <table className="min-w-full text-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-200">{t('id')}</th>
                <th className="px-4 py-2 border border-gray-200">{t('image')}</th>
                <th className="px-4 py-2 border border-gray-200">{t('titleColumn')}</th>
                <th className="px-4 py-2 border border-gray-200">{t('description')}</th>
                <th className="px-4 py-2 border border-gray-200">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-4 py-2 border border-gray-200">{offer.id}</td>
                  <td className="px-4 py-2 border border-gray-200">
                    <Image src={offer.image} width={50} height={50} alt={offer.title} />
                  </td>
                  <td className="px-4 py-2 border border-gray-200">{offer.title}</td>
                  <td className="px-4 py-2 border border-gray-200">{offer.description}</td>
                  <td className="px-4 py-6 border flex justify-center items-center gap-5">
                    <button onClick={() => openEditModal(offer)}>
                      <Edit2 className="w-5 h-5 text-green-500 hover:text-gray-400" />
                    </button>
                    <button onClick={() => deleteOffer(offer.id)}>
                      <Trash className="w-5 h-5 text-red-500 hover:text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddOfferModal isOpen={isAddModalOpen} onClose={closeAddModal} onSave={addOffer} />
      {isEditModalOpen && currentOffer && (
        <EditOfferModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          offer={currentOffer}
          onSave={editOffer}
        />
      )}
    </div>
  );
};

export default OffersPage;

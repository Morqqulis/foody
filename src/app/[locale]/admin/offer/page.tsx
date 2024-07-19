"use client";

import AdminAside from "@sections/Admin/Aside/AdminAside";
import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import AddOfferModal from "@sections/Admin/Offers/AddOfferModal";
import EditOfferModal from "@sections/Admin/Offers/EditOfferModal";
import { Edit2, Trash } from "lucide-react";

interface Offer {
  id: number;
  image: string;
  title: string;
  description: string;
}

const OffersPage: NextPage = (): JSX.Element => {
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
    <div className="flex min-h-screen bg-gray-900 text-white">
      <AdminAside />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Offers</h1>
          <button
            onClick={openAddModal}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            + Add Offer
          </button>
        </div>
        <div className="overflow-y-auto bg-gray-100">
          <table className="min-w-full text-gray-800 ">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-700">ID</th>
                <th className="px-4 py-2 border border-gray-700">Image</th>
                <th className="px-4 py-2 border border-gray-700">Title</th>
                <th className="px-4 py-2 border border-gray-700">Description</th>
                <th className="px-4 py-2 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td className="border border-gray-700 px-4 py-2">{offer.id}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <Image src={offer.image} width={50} height={50} alt={offer.title} />
                  </td>
                  <td className="border border-gray-700 px-4 py-2">{offer.title}</td>
                  <td className="border border-gray-700 px-4 py-2">{offer.description}</td>
                  <td className="border border-gray-700 px-4 py-2 ">
                    <button onClick={() => openEditModal(offer)}>
                      <Edit2 className="w-5 h-5 text-green-500 hover:text-gray-400" />
                    </button>
                    <p></p>
                    <button onClick={() => deleteOffer(offer.id)}>
                      <Trash className="w-5 h-5 text-red-500 hover:text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
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
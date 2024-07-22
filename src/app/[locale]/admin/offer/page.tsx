"use client";

import AddOfferModal from "@sections/Admin/Offers/AddOfferModal"
import EditOfferModal from "@sections/Admin/Offers/EditOfferModal"
import AdminAside from '@sections/Aside/AdminAside'
import { Edit2, Trash } from "lucide-react"
import { NextPage } from "next"
import Image from "next/image"

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
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

export default OrdersPage;

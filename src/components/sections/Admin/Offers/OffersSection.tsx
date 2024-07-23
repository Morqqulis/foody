"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { Edit, Trash } from "lucide-react";
import Table from "@sections/Admin/Table";
import AddOfferModal from "./AddOfferModal";
import EditOfferModal from "./EditOfferModal";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import { useTranslations } from "next-intl";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}

const OffersPage: NextPage = (): JSX.Element => {
  const t = useTranslations("OffersPage");

  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 1145,
      image: "https://via.placeholder.com/150",
      title: "test3",
      description: "descriptions",
    },
    {
      id: 1456,
      image: "https://via.placeholder.com/150",
      title: "test2",
      description: "description",
    },
  ]);

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);

  const handleDelete = (id: number) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  const handleEdit = (offer: Offer) => {
    setCurrentOffer(offer);
    setEditModalOpen(true);
  };

  const handleSaveNewOffer = (newOffer: Offer) => {
    setOffers((prevOffers) => [...prevOffers, newOffer]);
  };

  const handleSaveEditedOffer = (updatedOffer: Offer) => {
    setOffers((prevOffers) => prevOffers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer)));
  };

  const header = [t("id"), t("image"), t("titleColumn"), t("description"), t("actions")];

  const body = offers.map((offer) => ({
    ...offer,
    actions: (
      <div className="flex items-center gap-2">
        <Edit className="h-6 w-6 cursor-pointer text-green-500 hover:text-gray-400" onClick={() => handleEdit(offer)} />
        <Trash className="h-6 w-6 cursor-pointer text-red-500 hover:text-gray-400" onClick={() => handleDelete(offer.id)} />
      </div>
    ),
  }));

  return (
    <main className="flex gap-[28px] p-[10px]">
      <section>
        <div className="flex h-[73px] w-[1124px] items-center justify-between rounded-[14px] bg-[#27283C] p-[22px]">
          <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{t("title")}</p>
          <button onClick={() => setAddModalOpen(true)} className="rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            {t("addOffer")}
          </button>
        </div>

        <Table headers={header} body={body} />
      </section>
      <AddOfferModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} onSave={handleSaveNewOffer} />
      {currentOffer && (
        <EditOfferModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} offer={currentOffer} onSave={handleSaveEditedOffer} />
      )}
    </main>
  );
};

export default OffersPage;
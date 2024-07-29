"use client";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { Pencil } from "lucide-react";
import Table from "@sections/Admin/Table";
import { useTranslations } from "next-intl";
import SectionHeader from "../Headers/SectionHeaders/SectionHeader";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import { getListDocuments } from "../../../../utls/functions";
import { collections } from "@libs/appwrite/config";
import DeleteModal from "../DeleteModal/DeleteModal";

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
}

const OffersPage: NextPage = (): JSX.Element => {
  const [offers, setOffers] = React.useState<Offer[]>([]);

  const t = useTranslations("Admin.Offers");

  useEffect(() => {
    (async () => {
      const offers: any = await getListDocuments(collections.offersId);
      setOffers(offers.documents);
    })();
  }, []);

  const header = [t("id"), t("image"), t("titleColumn"), t("description"), t("actions")];

  const body = offers.map((offer: any) => {
    const { title, description, image } = JSON.parse(offer.offer);
    const { $id: id } = offer;

    return {
      id,
      image,
      title,
      description,
      actions: (
        <div className="flex items-center gap-2">
          <ReusableSheet whatIs="EditOffer" trigger={<Pencil size={21} className="cursor-pointer text-green-500" />} id={id} />
          <DeleteModal collectionId={collections.offersId} deletedId={id} />
        </div>
      ),
    };
  });

  return (
    <section>
      <SectionHeader title={t("title")} />
      <Table headers={header} body={body} />
    </section>
  );
};

export default OffersPage;

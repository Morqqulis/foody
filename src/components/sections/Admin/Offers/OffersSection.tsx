import React from "react";
import { NextPage } from "next";
import { Pencil } from "lucide-react";
import Table from "@sections/Admin/Table";
import { useTranslations } from "next-intl";
import SectionHeader from "../Headers/SectionHeaders/SectionHeader";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import DeleteModal from "../DeleteModal/DeleteModal";
interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}

const OffersPage: NextPage = (): JSX.Element => {
  const t = useTranslations("Admin.Offers");

  const offers = [
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
  ];

  const header = [t("id"), t("image"), t("titleColumn"), t("description"), t("actions")];

  const body = offers.map((offer) => ({
    ...offer,
    actions: (
      <div className="flex items-center gap-2">
        <ReusableSheet whatIs="EditOffer" trigger={<Pencil size={21} className="cursor-pointer text-green-500" />} />
        {/* <DeleteModal  /> */} 
      </div>
    ),
  }));

  return (
    <section>
      <SectionHeader title={t("title")} />
      <Table headers={header} body={body} />
    </section>
  );
};

export default OffersPage;

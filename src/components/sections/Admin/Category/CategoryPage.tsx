"use server";
import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import DeleteModal from "../DeleteModal/DeleteModal";
import Table from "../Table";
import { getDocuments } from "../../../../utls/functions";
import { getTranslations } from "next-intl/server";
import { collections } from "@libs/appwrite/config";

type Category = {
  id: number;
  image: string;
  name: string;
  slug: string;
  actions: any;
};

const filteredData = (data: any) => {

  return data.map((item: any) => ({
    id: item.$id,
    image: item.image,
    name: item.name,
    slug: item.slug,
    actions: (
      <div className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={<Pencil size={16} className="cursor-pointer text-[#00B2A9]" />} whatIs="EditCategory" id={item.$id} />
        <DeleteModal collectionId={item.$collectionId} deletedId={item.$id} />
      </div>
    ),
  }));
};

const CategoryPage = async () => {
  const t = getTranslations("Admin.Category");
  const data = filteredData((await getDocuments(collections.categoriesId)).documents);
  if (data.length > 0) {
    return (
      <div className="flex h-screen w-full ">
        <Table headers={["ID", "Image", "Name", "Slug", ""]} body={data} />
      </div>
    );
  } else {
    return <div>Empty</div>;
  }
};

export default CategoryPage;

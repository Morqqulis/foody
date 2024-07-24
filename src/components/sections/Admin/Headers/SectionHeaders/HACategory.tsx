import CategoryModal from "@sections/Admin/Category/CategoryModal";
import { PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
interface IHACategory {}
type Category = {
  id: number;
  image: string;
  name: string;
  slug: string;
};

const initialCategories: Category[] = [
  { id: 9177, image: "https://placehold.jp/150x150.png", name: "Pizza", slug: "yummy-pizza" },
  { id: 9178, image: "https://placehold.jp/150x150.png", name: "Sandvic", slug: "sendvic" },
  { id: 9179, image: "https://placehold.jp/150x150.png", name: "Fries", slug: "fries" },
  { id: 9177, image: "https://placehold.jp/150x150.png", name: "Pizza", slug: "yummy-pizza" },
  { id: 9178, image: "https://placehold.jp/150x150.png", name: "Sandvic", slug: "sendvic" },
  { id: 9179, image: "https://placehold.jp/150x150.png", name: "Fries", slug: "fries" },
];

const HACategory: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Category");

  return (
    <div className="mb-4 flex items-center justify-between">
      <ReusableSheet
        trigger={
          <div className="cursor-pointer rounded-md bg-purple-700 p-2 text-white">
            <PlusCircle className="mr-2 inline" />
            {t("addCategory")}
          </div>
        }
        whatIs="AddCategory"
      />
    </div>
  );
};

export default HACategory;

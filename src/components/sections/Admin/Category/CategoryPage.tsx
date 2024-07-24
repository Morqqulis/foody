import { FC,  } from "react";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import DeleteModal from "../DeleteModal/DeleteModal";

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

const AdminRightSidebar: FC = () => {
  const t = useTranslations("Admin.Category");

  return (
    <div className="flex h-screen w-full flex-col p-6">
      <div className="overflow-y-auto bg-gray-100">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">{t("id")}</th>
              <th className="border-b px-4 py-2">{t("image")}</th>
              <th className="border-b px-4 py-2">{t("name")}</th>
              <th className="border-b px-4 py-2">{t("slug")}</th>
              <th className="border-b px-4 py-2">{t("actions")}</th>
            </tr>
          </thead>
          <tbody>
            {initialCategories.map((category) => (
              <tr key={category.id}>
                <td className="border-b px-4 py-2">{category.id}</td>
                <td className="border-b px-4 py-2">
                  <Image src={category.image} alt={category.name} width={32} height={32} />
                </td>
                <td className="border-b px-4 py-2">{category.name}</td>
                <td className="border-b px-4 py-2">{category.slug}</td>
                <td className="border-b px-4 py-2 ">
                  <ReusableSheet trigger={<Edit size={16} className="mx-1 text-blue-500 hover:text-blue-700 " />} whatIs="EditCategory" />
                  <DeleteModal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRightSidebar;

import { FC } from "react";
import {  Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import ReusableSheet from "@sections/Admin/Sheet/ReusableSheet";
import DeleteModal from "../DeleteModal/DeleteModal";
import Table from "../Table";

type Category = {
  id: number;
  image: string;
  name: string;
  slug: string;
  actions: any;
};

const initialCategories: Category[] = [
  {
    id: 1,
    image: "https://placehold.jp/150x150.png",
    name: "Pizza",
    slug: "yummy-pizza",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer " />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
  {
    id: 2,
    image: "https://placehold.jp/150x150.png",
    name: "Sandvic",
    slug: "sendvic",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer " />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
  {
    id: 3,
    image: "https://placehold.jp/150x150.png",
    name: "Fries",
    slug: "fries",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer " />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
  {
    id: 4,
    image: "https://placehold.jp/150x150.png",
    name: "Pizza",
    slug: "yummy-pizza",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer " />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
  {
    id: 5,
    image: "https://placehold.jp/150x150.png",
    name: "Sandvic",
    slug: "sendvic",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer " />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
  {
    id: 6,
    image: "https://placehold.jp/150x150.png",
    name: "Fries",
    slug: "fries",
    actions: (
      <td className=" flex items-center gap-2 px-4 py-2">
        <ReusableSheet trigger={
          <Pencil size={16} className="text-[#00B2A9] cursor-pointer" />} whatIs="EditCategory" />
        <DeleteModal />
      </td>
    ),
  },
];

const AdminRightSidebar: FC = () => {
  const t = useTranslations("Admin.Category");

  return (
    <div className="flex h-screen w-full ">
        <Table headers={["ID", "Image", "Name", "Slug",""]} body={initialCategories} />
    </div>
  );
};

export default AdminRightSidebar;

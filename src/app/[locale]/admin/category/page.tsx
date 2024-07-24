import AdminRightSidebar from "@sections/Admin/Category/CategoryPage";

import { NextPage } from "next";
import AdminAside from "@sections/Aside/AdminAside";
import SectionHeader from "@sections/Admin/Headers/SectionHeaders/SectionHeader";

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <div className="container">
        <SectionHeader title="Category" />
        <AdminRightSidebar />
      </div>
    </main>
  );
};

export default CategoryPage;

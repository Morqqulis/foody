import AdminAside from "@sections/Admin/Aside/AdminAside";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import { NextPage } from "next";

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <section>
        <SectionHeader title="Restaurants" />
        category
      </section>
    </main>
  );
};

export default CategoryPage;

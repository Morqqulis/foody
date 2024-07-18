import { NextPage } from "next";
import SectionHeader from "../../../../components/sections/Admin/Headers/SectionHeader";
import AdminAside from "../../../../components/sections/Admin/Aside/AdminAside";
import ProductsSection from "../../../../components/sections/Admin/Products/ProductsSection";

const ProductsPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <AdminAside />
      <section>
        <SectionHeader title="Products" />
        <ProductsSection />
      </section>
    </main>
  );
};

export default ProductsPage;

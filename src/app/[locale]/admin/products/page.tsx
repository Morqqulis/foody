import { NextPage } from "next";
import SectionHeader from "./SectionHeader";
import Aside from "./Aside";
import ProductsSection from "./ProductsSection";

const ProductsPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <Aside />
      <section>
        <SectionHeader title="Products" />
        <ProductsSection />
      </section>
    </main>
  );
};

export default ProductsPage;

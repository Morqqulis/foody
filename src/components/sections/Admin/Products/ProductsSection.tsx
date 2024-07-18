import { NextPage } from "next";
import data from "../../../../app/[locale]/admin/products/data";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductsSection: NextPage = (): JSX.Element => {
  return (
    <section className="flex w-[1124px] flex-col items-center justify-center   px-0 pt-[52px] ">
      <div className="flex flex-wrap  gap-[35px]">
        {data.map((product, index) => (
          <ProductCard prod={product} index={index} key={product.id} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ProductsSection;

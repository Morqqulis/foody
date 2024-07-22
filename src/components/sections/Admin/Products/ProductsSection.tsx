"use client";
import Pagination from "@sections/Paginations/AdminPagination";
import data from "../../../../app/[locale]/admin/products/data";
import ProductCard from "./ProductCard";
import { FC, useState } from "react";

const ProductsSection: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const firstIndex = (currentPage - 1) * productsPerPage;
  const secondIndex = currentPage * productsPerPage;

  const newProducts = data.slice(firstIndex, secondIndex);

  return (
    <section className="flex w-[1124px] flex-col items-center justify-center   px-0 pt-[52px] ">
      <div className="flex h-[590px]  w-full flex-wrap gap-[35px]">
        {newProducts.map((product, index) => (
          <ProductCard prod={product} index={index} key={product.id} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} dataCount={data.length} currentPage={currentPage} perPage={10} />
    </section>
  );
};

export default ProductsSection;

"use client";
import Pagination from "@sections/Paginations/AdminPagination";
import ProductCard from "./ProductCard";
import { FC, useEffect, useState } from "react";
import { getListDocuments } from "../../../../utls/functions";
import { collections } from "@libs/appwrite/config";

const ProductsSection: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsData, setProductsData] = useState([]);
  const getProds = async () => {
    const res = await getListDocuments(collections.productsId);
    setProductsData(res.documents);
  };

  useEffect(()=>{
    getProds();
  },[])

  const productsPerPage = 10;
  const firstIndex = (currentPage - 1) * productsPerPage;
  const secondIndex = currentPage * productsPerPage;

  const newProducts = productsData.slice(firstIndex, secondIndex);

  return (
    <section className="flex w-[1124px] flex-col items-center justify-center   px-0 pt-[52px] ">
      <div className="flex h-[590px]  w-full flex-wrap gap-[35px]">
        {newProducts.map((product) => (
          <ProductCard prod={product} key={product.$id} />
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} dataCount={productsData.length} currentPage={currentPage} perPage={10} />
    </section>
  );
};

export default ProductsSection;

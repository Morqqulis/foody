import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
interface IPagination {
  setCurrentPage: (prev: number) => void;
  currentPage: number;
  productsCount: number;
}
const Pagination: React.FC<IPagination> = ({ setCurrentPage, productsCount, currentPage }): JSX.Element => {
  const pageCount = [];

  for (let i = 1; i <= Math.ceil(productsCount / 10); i++) {
    pageCount.push(i);
  }

  return (
    <section className="mt-[52px] flex h-[90px] w-[429px] flex-row items-center justify-center gap-4 p-[30px]">
      <button
        className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]"
        onClick={() => {
          if (currentPage === 1) {
            setCurrentPage(1);
          } else {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        <ChevronLeft className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
      </button>

      {pageCount.map((num) => (
        <button
          key={num}
          className={`flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]  ${currentPage === num && "bg-[#EC5CF8]"}`}
        >
          <p
            className={`h-[22px] w-[62px] text-center text-[18px] font-extrabold ${currentPage === num ? "text-white" : "text-[#EC5CF8]"}`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </p>
        </button>
      ))}

      <button
        className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]"
        onClick={() => {
          if (currentPage === pageCount.length) {
            setCurrentPage(pageCount.length);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        <ChevronRight className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
      </button>
    </section>
  );
};

export default Pagination;

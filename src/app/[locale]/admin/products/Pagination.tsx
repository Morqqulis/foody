import { NextPage } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination: NextPage = (): JSX.Element => {
  return (
    <section className="mt-[52px] flex h-[90px] w-[429px] flex-row items-center justify-center gap-4 p-[30px]">
      <div className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]">
        <ChevronLeft className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
      </div>

      {[1, 2, 3].map((num) => (
        <div
          key={num}
          className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]"
        >
          <p className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]">
            {num}
          </p>
        </div>
      ))}

      <div className=" flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[100px] border border-[#EC5CF8]">
        <ChevronRight className="h-[22px] w-[62px] text-center text-[18px] font-extrabold text-[#EC5CF8]" />
      </div>
    </section>
  );
};

export default Pagination;

import { NextPage } from "next";
interface IProductsPage {
  title: string;
}

const SectionHeader: NextPage<IProductsPage> = ({ title }): JSX.Element => {
  return (
    <main className="h-[73px] w-[1124px] rounded-[14px] bg-[#27283C] p-[22px]">
      <p className="font-roboto text-left text-[20px] font-medium leading-[24px] tracking-[1%] text-[rgb(199,199,199)]">
        {title}
      </p>
    </main>
  );
};

export default SectionHeader;

import { FC } from "react";
interface IProductsPage {
  title: string;
}

const SectionHeader: FC<IProductsPage> = ({ title }): JSX.Element => {
  

  return (
    <div className="h-[73px] w-[1124px] rounded-[14px] bg-[#27283C] p-[22px] flex justify-between">
      <p className={`text-[20px] font-medium leading-[24px] text-[rgb(199,199,199)]`}>{title}</p>
    </div>
  );
};

export default SectionHeader;

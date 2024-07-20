import { NextPage } from "next";
import OffersPage from "@sections/Admin/Offers/Offers";

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
     
        <OffersPage />
     
    </main>
  );
};

export default OrdersPage;

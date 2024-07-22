import AdminAside from "@sections/Aside/AdminAside";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import { NextPage } from "next";

interface IOrderHistoryPage {}

const OrderHistoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
    <section>
      <SectionHeader title="Restaurants" />
history    </section>
  </main>
  );
};

export default OrderHistoryPage;

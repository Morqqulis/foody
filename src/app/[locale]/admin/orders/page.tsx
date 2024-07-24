import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import OrdersTable from "@sections/Admin/Orders/OrdersTable";
import { NextPage } from "next";

interface IOrdersPage {}

const OrdersPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <section>
        <SectionHeader title="Restaurants" />
        <OrdersTable />
      </section>
    </main>
  );
};

export default OrdersPage;

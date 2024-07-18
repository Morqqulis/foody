import AdminAside from "@sections/Admin/Aside/AdminAside";
import { NextPage } from "next";

interface IOrderHistoryPage {}

const OrderHistoryPage: NextPage = (): JSX.Element => {
  return (
    <main>
      {" "}
      <div className="container">
        <AdminAside />
      </div>
      AdminOrderHistory
    </main>
  );
};

export default OrderHistoryPage;

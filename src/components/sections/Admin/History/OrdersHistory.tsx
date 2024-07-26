import Table from "@sections/Admin/Table";
import { FC } from "react";

interface IOrderHistoryPage {}

const OrderHistoryPage: FC = (): JSX.Element => {
  const header = ["ID", "Customer ID", "Time", "Delivery Address", "Amount", "Payment Method", "Contact"];

  const body = [
    { id: 1, customer_id: 1, time: "2020-01-01", delivery_adress: "test", amount: 100, payment_method: "Card", contact: "123456789" },
    { id: 2, customer_id: 2, time: "2020-01-01", delivery_adress: "test", amount: 100, payment_method: "Card", contact: "123456789" },
    { id: 3, customer_id: 3, time: "2020-01-01", delivery_adress: "test", amount: 100, payment_method: "Cash on delivery", contact: "123456789" },
  ];

  return <Table headers={header} body={body} />;
};

export default OrderHistoryPage;

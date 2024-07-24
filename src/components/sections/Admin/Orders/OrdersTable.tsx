import { Eye } from "lucide-react";
import Table from "../Table";
import DeleteModal from "../DeleteModal/DeleteModal";
import { adminOrdersData } from "@data/data";
interface IOrdersTable {}

const OrdersTable: React.FC = (): JSX.Element => {
  const data = adminOrdersData;

  return (
    <Table
      headers={["ID", "Customer ID", "Time", "Delivery Adress", "Amount", "Payment Method", "Contact"]}
      body={data}
      trigger={
        <td className="flex gap-2">
          <Eye className="h-6 w-6 cursor-pointer" />
          <DeleteModal />
        </td>
      }
    />
  );
};

export default OrdersTable;

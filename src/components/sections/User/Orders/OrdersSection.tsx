"use client";
import { userOrdersData } from "@data/data";
import Table from "@sections/Admin/Table";
import { EllipsisVertical, Eye } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import UserPagination from "../../Paginations/UserPagination";
import { useState } from "react";
interface IOrdersSection {}

const OrdersSection: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const data = userOrdersData;
  const headers = ["ID", "Time", "Delivery Adress", "Amount", "Payment Method", "Contact"];
  const filteredData = data.slice((currentPage - 1) * perPage, currentPage * perPage);
  return (
    <div className="flex h-full min-h-[500px] flex-col gap-7 bg-[#F3F4F6] p-8">
      <h2 className="font-mukta text-[30px] font-semibold leading-[24px] tracking-[3%] text-black">Your Orders</h2>
      <Table
        headers={headers}
        body={filteredData}
        trigger={
          <td className="flex gap-2 border border-gray-200 px-4 py-2">
            <DropdownMenu.Root>
              <DropdownMenu.DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenu.DropdownMenuTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="shadow-custom h-[47px] w-[79px] bg-white">
                  <DropdownMenu.Item
                    className="cursor-pointer text-center font-bold text-green-600 outline-none hover:bg-slate-300"
                    onClick={() => console.log("salam")}
                  >
                    Show
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="cursor-pointer text-center font-bold text-red-700 outline-none hover:bg-slate-300">
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </td>
        }
      />
      {data.length > perPage && (
        <UserPagination setCurrentPage={setCurrentPage} dataCount={data.length} currentPage={currentPage} perPage={perPage} />
      )}
    </div>
  );
};

export default OrdersSection;

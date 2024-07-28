"use client";
import { userOrdersData } from "@data/data";
import Table from "@sections/Admin/Table";
import { EllipsisVertical } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import UserPagination from "../../Paginations/UserPagination";
import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@ui/dialog";

const OrdersSection: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { Root, DropdownMenuTrigger, Portal, Content, Item } = DropdownMenu;

  const perPage = 10;
  const data = userOrdersData;
  const headers = ["ID", "Time", "Delivery Address", "Amount", "Payment Method", "Contact"];
  const filteredData = data.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => ({
    ...order,
    actions: (
      <Root>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <Portal>
          <Content className="shadow-custom h-[47px] w-[79px] bg-white">
            <Dialog>
              <DialogTrigger>
                <div className="w-[79px] cursor-pointer py-2 text-center  font-bold text-green-600 outline-none hover:bg-slate-300">Show</div>
              </DialogTrigger>
              <DialogContent className="flex h-[500px] max-w-[800px] flex-col justify-between overflow-auto rounded-md bg-white">
                <Table headers={headers} body={data} />
                <DialogTitle></DialogTitle>
                <UserPagination setCurrentPage={setCurrentPage} dataCount={data.length} currentPage={currentPage} perPage={perPage} />
                <DialogDescription></DialogDescription>
              </DialogContent>
            </Dialog>
            <Item
              className="cursor-pointer text-center font-bold text-red-700 outline-none hover:bg-slate-300"
              onClick={() => console.log(order.id, "delete")}
            >
              Delete
            </Item>
          </Content>
        </Portal>
      </Root>
    ),
  }));

  return (
    <div className="flex h-full min-h-[500px] flex-col gap-7 bg-[#F3F4F6] p-8">
      <h2 className="font-mukta text-[30px] font-semibold leading-[24px] tracking-[3%] text-black">Your Orders</h2>
      <Table headers={headers} body={filteredData} />
      {data.length > perPage && (
        <UserPagination setCurrentPage={setCurrentPage} dataCount={data.length} currentPage={currentPage} perPage={perPage} />
      )}
    </div>
  );
};

export default OrdersSection;

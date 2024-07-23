"use client";

import React from "react";

function CheckoutOrder() {
  const data = [
    {
      id: 1,
      title: " Papa John's Pizza Restaurant",
      price: 8.2,
      count: 1,
    },
    {
      id: 2,
      title: "Papa Coffee",
      price: 6.02,
      count: 2,
    },
  ];
  function getTotal() {
    return data.reduce((total, data) => total + data.price * data.count, 0);
  }

  return (
    <div className={"flex h-[500px] w-[397px] flex-col items-center justify-between rounded bg-gray-7"}>
      <h2 className={"mt-[20px] flex w-[324px] items-center  justify-center text-lg font-medium"}>Your Order</h2>

      <ul className={"flex h-[300px] max-h-[80%] w-[324px] flex-col  overflow-auto"}>
        {data.map((order) => (
          <li className={"flex justify-between"} key={order.id}>
            <div className="flex gap-[10px]">
              <span className={"text-lg font-medium"}>{order.count}</span>
              <p>* {order.title}</p>
            </div>
            <span>${order.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className={"flex h-[13%] w-[324px] items-center justify-center border-t"}>
        <div className={"flex w-full justify-between"}>
          <p>Total</p>${getTotal().toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CheckoutOrder;

import React from "react";

interface IProps {
  basket: any;
}

const CheckoutOrder: React.FC<IProps> = ({ basket }): JSX.Element => {


  function getTotal() {
    return basket.reduce((total: number, data: any) => total + Number(data.price) * Number(data.quantity), 0);
  }
  

  return (
    <div className={"flex h-[500px] w-[397px] flex-col items-center justify-between rounded bg-gray-7"}>
      <h2 className={"mt-[20px] flex w-[324px] items-center  justify-center text-lg font-medium"}>Your Order</h2>

      <ul className={"flex h-[300px] max-h-[80%] w-[324px] flex-col  overflow-auto"}>
        {basket.map((order: any) => (
          <li className={"flex justify-between"} key={order.$id}>
            <div className="flex gap-[10px]">
              <span className={"text-lg font-medium"}>{order.quantity}</span>
              <p>* {order.name}</p>
            </div>
            <span>${Number(order.price).toFixed(2)}</span>
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
};

export default CheckoutOrder;

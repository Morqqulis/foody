import React from "react";

interface IProps {
  basket: any;
}

const CheckoutOrder: React.FC<IProps> = ({ basket }): JSX.Element => {
  function getTotal() {
    return basket.reduce((total: number, data: any) => total + Number(data.price) * Number(data.quantity), 0);
  }

  return (
    <div className={`flex h-[370px] w-full max-w-[400px] gap-6 flex-col bg-gray-7 px-10 pr-0 py-5`}>
      <h2 className={` text-center text-lg font-medium`}>Your Order</h2>
      <div className={`flex h-full grow flex-col gap-2 overflow-auto pr-10`}>
        {basket.length > 0 &&
          basket.map((item) => (
            <div className={`flex items-start justify-between gap-4`} key={item.$id}>
              <div className={`flex items-center gap-2 text-sm font-normal`}>
                <span className={`text-lg font-medium`}>{item.quantity} x</span>
                <span className={`text-base font-normal capitalize`}>{item.name}</span>
              </div>
              <span>${item.price}</span>
            </div>
          ))}
      </div>
      <div className={`flex items-center justify-between gap-2`}>
        <span className={`font-medium`}>Total</span>
        <span className={``}>${getTotal().toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutOrder;

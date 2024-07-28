import React from "react";

interface IProps {
  basket: any;
}

const CheckoutOrder: React.FC<IProps> = ({ basket }): JSX.Element => {
  function getTotal() {
    return basket.reduce((total: number, data: any) => total + Number(data.price) * Number(data.quantity), 0);
  }
  console.log(basket);
  return (
    <div className={`h-full min-h-[370px] w-full max-w-[400px] bg-gray-7 px-10 py-5`}>
      <h2 className={`text-center text-lg font-medium`}>Your Order</h2>
      {basket.length > 0 &&
        basket.map((item) => (
          <div key={item.$id}>
            <div>
              <div className={`flex items-center gap-1 text-sm font-normal`}>
                <span className={`text-lg font-medium`}>{item.quantity} x</span>
                <span className={``}>{item.name}</span>
              </div>
              <span>{item.price}</span>
            </div>
            <span>{getTotal().toFixed(2)}</span>
          </div>
        ))}
    </div>
  );
};

export default CheckoutOrder;

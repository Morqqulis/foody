'use client'


import React from 'react'

function CheckoutOrder() {
  const data = [
    {
      title: " Papa John's Pizza Restaurant",
      price: 8.20,
      count: 1
    },
    {
      title: "Papa Coffee",
      price: 6.02,
      count: 2
    },
  
  ]
  function getTotal() {
    return data.reduce((total, data) => total + (data.price * data.count), 0)
  }

  return (
    <div className={'w-[397px] h-[500px] bg-gray-7 rounded flex flex-col items-center justify-between'}>
      <h2 className={'w-[324px] flex justify-center items-center  font-medium text-lg mt-[20px]'}>Your Order</h2>

      <ul className={'w-[324px] max-h-[80%] h-[300px] flex flex-col  overflow-auto'}>
        {data.map((order) =>
          <li className={'flex justify-between'}>
            <div className='flex gap-[10px]'><span className={'font-medium text-lg'}>{order.count}</span>
              <p>
                * {order.title}
              </p></div>
            <span >${order.price.toFixed(2)}</span>
          </li>)
        }
      </ul>
      <div className={'h-[13%] w-[324px] border-t flex items-center justify-center'}>
        <div className={'w-full flex justify-between'}>
          <p>
            Total
          </p>
          ${getTotal().toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrder
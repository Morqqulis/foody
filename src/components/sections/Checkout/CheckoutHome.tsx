'use client'

import React, { useState, FormEvent, useEffect } from 'react';
import CheckoutOrder from './CheckoutOrder';
import DoneIconComponent from "@sections/Checkout/LottieAnimation";

const phonePrefixes = ["050", "051", "055", "070", "010", "099", "077"];

function CheckoutHome() {
  const [prefix, setPrefix] = useState(phonePrefixes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDoneIcon, setShowDoneIcon] = useState(false)

  const handlePrefixChange = (event: FormEvent<HTMLSelectElement>) => {
    setPrefix(event.currentTarget.value);
  };

  const handlePhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, '');
    setPhoneNumber(input.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`Phone Number: ${prefix}${phoneNumber}`);
  };

  useEffect(() => {
    if (showDoneIcon) {
      const timer = setTimeout(() => {
        setShowDoneIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showDoneIcon]);


  return (
    showDoneIcon ? <DoneIconComponent /> : <div className={'flex grid  grid-flow-col justify-stretch  mb-[150px] '}>

      <div className={'w-[618px] h-[515px] bg-gray-7 px-7 rounded '}>
        <h2 className={'font-semibold text-3xl text-[rgba(79,79,79,1)]  my-[20px]'}>Checkout</h2>
        <form onSubmit={handleSubmit} action="" className={'flex flex-col  gap-y-[35px] '}>
          <div>
            <label htmlFor="" className={'text-[rgba(79,79,79,1)] font-semibold'}>Delivery Address</label>
            <input className={'w-[546px] h-[53px] pl-5 rounded mt-[10px]'} type="text" placeholder='Ataturk 45 Ganclik Baku' />
          </div>
          <div>
            <div>
              <label htmlFor="" className={'text-[rgba(79,79,79,1)] font-semibold mb-[10px]'}>Contact Number</label>
              <div className="flex items-center space-x-2">
              </div>
              <select
                className="h-[53px] pl-0 rounded mt-[10px]"
                value={prefix}
                onChange={handlePrefixChange}
              >
                {phonePrefixes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                className="w-[490px] h-[53px] pl-5 rounded mt-[10px]"
                type="tel"
                required
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                maxLength={9}
                value={phoneNumber}
                onInput={handlePhoneNumberChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className={'text-[rgba(79,79,79,1)] font-semibold'}>Payment Method</label>
            <div className={'flex flex-row gap-[79px] mt-[6px]'}>
              <div className='flex items-center gap-2'>
                <input type="radio"  name="checkout" id="cashCheck" />
                <label htmlFor="cashCheck">pay at the door</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" name="checkout" id="cardCheck" />
                <label htmlFor="cardCheck">pay at the door by credit card</label>
              </div>
            </div>
          </div>
          <button onClick={() => setShowDoneIcon(true)} className={'bg-lime-600 text-white h-[53px] w-[546px] rounded mt-[20px] duration-500 border-2 hover:border-lime-600  hover:bg-white hover:text-lime-600'}>Checkout</button>
        </form>
      </div>
      <CheckoutOrder />

    </div>
  )
}

export default CheckoutHome;
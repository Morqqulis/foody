"use client";

import React, { useState, FormEvent, useEffect } from "react";
import CheckoutOrder from "./CheckoutOrder";
import DoneIconComponent from "@sections/Checkout/LottieAnimation";
import { getDocuments } from "../../../utls/functions";
import { collections } from "@libs/appwrite/config";

const phonePrefixes = ["050", "051", "055", "070", "010", "099", "077"];

function CheckoutHome() {
  const [prefix, setPrefix] = useState(phonePrefixes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDoneIcon, setShowDoneIcon] = useState(false);

  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState({});

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    (async () => {
      const userInfo = await getDocuments(collections.userId, userId);
      setUser(userInfo);
      const basketIdinUser = userInfo.basket.$id;
      if (basketIdinUser) {
        let prevBasket = userInfo.basket.productsList;
        setBasket(JSON.parse(prevBasket));
      }
    })();
  }, []);

  const handleCheckOut = () => {
    setShowDoneIcon(true);
    
    const order = JSON.stringify({
      user,
      basket,
    });
    
    // databases.createDocument(dbId, collections.ordersId, ID.unique(), order);
    // Ordersde duzelisler edib bunlari acacagiq
  };


  const handlePrefixChange = (event: FormEvent<HTMLSelectElement>) => {
    setPrefix(event.currentTarget.value);
  };

  const handlePhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, "");
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

  return showDoneIcon ? (
    <DoneIconComponent />
  ) : (
    <div className={" mb-[150px]  grid grid-flow-col  justify-stretch "}>
      <div className={"h-[515px] w-[618px] rounded bg-gray-7 px-7 "}>
        <h2 className={"my-[20px] text-3xl font-semibold  text-[rgba(79,79,79,1)]"}>Checkout</h2>
        <form onSubmit={handleSubmit} action="" className={"flex flex-col  gap-y-[35px] "}>
          <div>
            <label htmlFor="" className={"font-semibold text-[rgba(79,79,79,1)]"}>
              Delivery Address
            </label>
            <input className={"mt-[10px] h-[53px] w-[546px] rounded pl-5"} type="text" placeholder="Ataturk 45 Ganclik Baku" />
          </div>
          <div>
            <div>
              <label htmlFor="" className={"mb-[10px] font-semibold text-[rgba(79,79,79,1)]"}>
                Contact Number
              </label>
              <div className="flex items-center space-x-2"></div>
              <select className="mt-[10px] h-[53px] rounded pl-0" value={prefix} onChange={handlePrefixChange}>
                {phonePrefixes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                className="mt-[10px] h-[53px] w-[490px] rounded pl-5"
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
            <label htmlFor="" className={"font-semibold text-[rgba(79,79,79,1)]"}>
              Payment Method
            </label>
            <div className={"mt-[6px] flex flex-row gap-[79px]"}>
              <div className="flex items-center gap-2">
                <input type="radio" name="checkout" id="cashCheck" />
                <label htmlFor="cashCheck">pay at the door</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="checkout" id="cardCheck" />
                <label htmlFor="cardCheck">pay at the door by credit card</label>
              </div>
            </div>
          </div>
          <button
            onClick={handleCheckOut}
            className={
              "mt-[20px] h-[53px] w-[546px] rounded border-2 bg-lime-600 text-white duration-500 hover:border-lime-600  hover:bg-white hover:text-lime-600"
            }
          >
            Checkout
          </button>
        </form>
      </div>
      <CheckoutOrder basket={basket} />
    </div>
  );
}

export default CheckoutHome;

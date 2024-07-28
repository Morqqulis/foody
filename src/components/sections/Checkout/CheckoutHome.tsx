"use client";

import React, { useState, FormEvent, useEffect } from "react";
import CheckoutOrder from "./CheckoutOrder";
import DoneIconComponent from "@sections/Checkout/LottieAnimation";
import { getDocuments } from "../../../utls/functions";
import { collections, databases, dbId, ID } from "@libs/appwrite/config";
import { Button } from "@ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui/form";
import { Input } from "@ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@ui/label";
import { RadioGroup, RadioGroupItem } from "@ui/radio-group";

// const phonePrefixes = ["050", "051", "055", "070", "010", "099", "077"];

const formSchema = z.object({
  address: z
    .string({
      required_error: "Delivery address is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  phone: z
    .string({
      required_error: "Contact number is required.",
      invalid_type_error: "Contact number must be a number.",
    })
    .min(2, {
      message: "Username must be at least 11 characters.",
    }),
  payment: z.enum(["Cash", "Card"], {
    required_error: "Payment method is required.",
  }),
});

function CheckoutHome() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      phone: '',
      payment: "Cash",
    },
  });

  //   const [prefix, setPrefix] = useState(phonePrefixes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showDoneIcon, setShowDoneIcon] = useState(false);

  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState({});

  const userId = localStorage.getItem("userId");

  const totalAmount = basket.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);

  useEffect(() => {
    (async () => {
      const userInfo = await getDocuments(collections.userId, userId);
      setUser(userInfo);

      const basketIdinUser = userInfo.basket && userInfo.basket[0].$id;
      if (basketIdinUser) {
        let prevBasket = userInfo.basket[0].productsList;
        setBasket(JSON.parse(prevBasket));
      }
    })();
  }, [userId]);

  const handleCheckOut = async (v: any) => {
    setShowDoneIcon(true);

    const orderInfo = JSON.stringify({
      time: new Date().toLocaleDateString(),
      deliveryAddress: v.deliveryAddress,
      amount: totalAmount,
      paymentMethod: v.paymentMethod,
      contact: v.contact,
      basket,
    });

    // @ts-ignore
    const basketId = await user.basket[0].$id;
    await databases.createDocument(dbId, collections.ordersId, ID.unique(), {
      user: userId,
      orderInfo,
    });
    await databases.deleteDocument(dbId, collections.basketId, basketId);
    setShowDoneIcon(false);
  };

  //   const handlePrefixChange = (event: FormEvent<HTMLSelectElement>) => {
  //     // setPrefix(event.currentTarget.value);
  //   };

  //   const handlePhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
  //     const input = event.currentTarget;
  //     input.value = input.value.replace(/[^0-9]/g, "");
  //     setPhoneNumber(input.value);
  //   };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     // alert(`Phone Number: ${prefix}${phoneNumber}`);
  //   };

  // useEffect(() => {
  //   if (showDoneIcon) {
  //     const timer = setTimeout(() => {
  //       setShowDoneIcon(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [showDoneIcon]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return showDoneIcon ? (
    <DoneIconComponent />
  ) : (
    <section className={`w-full`}>
      <div className={`flex items-start gap-4`}>
        <div className={`w-full basis-2/3 rounded-md bg-gray-7 p-10 pb-11`}>
          <h1 className={`mb-6  text-3xl font-semibold text-gray-2 `}>Checkout</h1>
          <Form {...form}>
            <form className={`flex flex-col gap-8`} onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className={`flex flex-col gap-1`}>
                    <FormLabel className={`text-lg font-semibold text-gray-2`}>Delivery Address</FormLabel>
                    <FormControl>
                      <Input
                        className={`p-6 text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:placeholder:opacity-0`}
                        placeholder="Ataturk 45 Ganclik Baku"
                        {...field}
                        type={"text"}
                        autoComplete={"address-level1 webauthn"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className={`flex flex-col gap-1`}>
                    <FormLabel className={`text-lg font-semibold text-gray-2`}>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        className={`p-6 text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:placeholder:opacity-0`}
                        placeholder="+994"
                        {...field}
                        type={"tel"}
                        autoComplete={"tel webauthn"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <RadioGroup className={`flex items-center gap-20`} onValueChange={field.onChange} defaultValue={field.value}>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className={` h-[30px] w-[30px]  first:fill-[#6FCF97] ${field.value === "Card" ? "border-[#6FCF97] text-[#6FCF97]" : "border-foreground text-foreground"}`}
                              value="Card"
                            />
                          </FormControl>
                          <FormLabel
                            className={`${field.value === "Card" ? "font-bold text-[#6FCF97]" : "text-foreground"} cursor-pointer text-base`}
                          >
                            pay at the door
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className={`h-[30px] w-[30px] first:fill-[#6FCF97] ${field.value === "Cash" ? "!border-[#6FCF97] text-[#6FCF97]" : "border-foreground text-foreground"}`}
                              value="Cash"
                            />
                          </FormControl>
                          <FormLabel
                            className={`${field.value === "Cash" ? "font-bold text-[#6FCF97]" : "border-slate-600"} text-base} cursor-pointer`}
                          >
                            pay at the door by credit card
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className={`bg-[#6FCF97] py-7`} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <CheckoutOrder basket={basket} />
      </div>
    </section>
  );
}

export default CheckoutHome;

{
  /* <CheckoutOrder basket={basket} /> */
}
// <button
//   onClick={() => handleCheckOut({ deliveryAddress: "baku", paymentMethod: "card", contact: "0555859885" })}
//   className={
//     "mt-[20px] h-[53px] w-[546px] rounded border-2 bg-lime-600 text-white duration-500 hover:border-lime-600  hover:bg-white hover:text-lime-600"
//   }
// >
//   Checkout
// </button>;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ui/form";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MyFormLabel from "./MyFormLabel";
// import { getDefaultValues, getSchema } from "../../utls/getShema";

import { collections } from "@libs/appwrite/config";
import { addDocuments, editDocuments, getListDocuments, getDocuments } from "../../utls/functions";
// import { RestuarantSchema } from "@settings/zodSchemes";
import { toast } from "./use-toast";

interface IMyform {
  whatIs: string;
  actionId?: string;
}

const Myform: React.FC<IMyform> = ({ whatIs, actionId }): JSX.Element => {
  const [file, setFile] = React.useState<File | null>(null);
  const [fileUrl, setFileUrl] = React.useState<string | null>(null);
  const [formatedSelectOption, setFormattedSelectOption] = useState<any[]>([]);
  const [prevValue, setPrevValue] = useState<any>(null);

  const getDocSelections = async (collectionId: string) => {
    const res = await getListDocuments(collectionId);
    const data = res.documents.map((item: any) => ({ id: item.$id, name: item.name }));
    setFormattedSelectOption(data);
  };

  const getDocItem = async (collectionId: string, docId: string) => {
    const res = await getDocuments(collectionId, docId);
    setPrevValue(res);
  };

  useEffect(() => {
    if (whatIs === "EditProduct" || whatIs === "AddProduct") {
      getDocSelections(collections.restaurantsId);
      getDocItem(collections.productsId, actionId);
    }

    if (whatIs === "AddRestaurant" || whatIs === "EditRestaurant") {
      getDocSelections(collections.categoriesId);
      getDocItem(collections.categoriesId, actionId);
    }
  }, []);

  let str: string;

  switch (whatIs) {
    case "EditProduct":
      str = `Products.EditProduct`;
      break;
    case "AddProduct":
      str = `Header`;
      break;
    case "EditCategory":
      str = `Category.EditCategory`;
      break;
    case "AddCategory":
      str = `Category.AddCategory`;
      break;
    case "AddRestaurant":
      str = `Restaurants.AddRestaurant`;
      break;
    case "EditRestaurant":
      str = `Restaurants.EditRestaurant`;
      break;
    case "AddOffer":
      str = `Offers.AddOffer`;
      break;
    case "EditOffer":
      str = `Offers.EditOffer`;
      break;
    default:
      str = `Header`;
      break;
  }
  const t = useTranslations(`Admin.${str}.Sheet`);

  // const schema = getSchema(whatIs);
  // const values = getDefaultValues(whatIs);

  // const form = useForm<z.infer<typeof schema>>({
  //   resolver: zodResolver(schema),
  //   defaultValues: values,
  // });
  const form = useForm();
  const { reset } = form;
  function readerFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function () {
        setFileUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile);
    }
  }

  const submit = async (v: any) => {
    if (whatIs.startsWith("Add") && !file) {
      toast({
        title: "Enter all sections",
        description: "Form fields must not be empty",
        variant: "destructive",
        duration: 2000,
      });
      reset();
      return;
    }

    const restaurantData = (data: any) => {
      return {
        name: data.name,
        cuisine: data.cuisine,
        deliveryMin: +data.deliveryMin,
        deliveryPrice: +data.deliveryPrice,
        address: data.address,
        category: data.category,
      };
    };

    const productData = () => {
      return {
        name: prevValue.name,
        description: prevValue.description,
        price: prevValue.price,
        restaurant: prevValue.restaurant,
      };
    };

    switch (whatIs) {
      case "EditProduct":
        const obj = productData();
        editDocuments(collections.productsId, { ...obj, ...v }, file, actionId);

        break;
      case "AddProduct":
        addDocuments(collections.productsId, v, file);
        break;
      case "EditCategory":
        editDocuments(collections.categoriesId, v, file, actionId);
        break;
      case "AddCategory":
        addDocuments(collections.categoriesId, v, file);
        break;
      case "AddRestaurant":
        addDocuments(collections.restaurantsId, restaurantData(v), file);
        break;
      case "EditRestaurant":
        const d = restaurantData(v);
        editDocuments(collections.restaurantsId, d, file, actionId);
        break;
      case "AddOffer":
        break;
      case "EditOffer":
        break;

      default:
        break;
    }

    form.reset();
    setFileUrl(null);
    setFile(null);

    toast({
      title: "Success",
      description: "Form request is succesfully sent",
      variant: "dark",
      duration: 2000,
    });
  };

  // console.log(getListDocuments(collections.categoriesId), getListDocuments(collections.restaurantsId));
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-8 overflow-auto">
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <p className="flex h-[32px] w-[252px] items-center text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
              {t("imageBlock.description")}
            </p>
            {fileUrl && <Image src={fileUrl} width={154} height={125} alt="upload" priority style={{ width: "154px", height: "125px" }} />}
          </div>
          <Label className="mt-8 flex h-[100px] w-[526px] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#43445A]">
            <Image src="/Form/uploadFile.svg" width={60} height={40} alt="upload" priority />
            <p className="text-[18px] font-medium leading-[24px] text-[#C7C7C7]"> {file ? file.name : t("imageBlock.label")}</p>
            <Input type="file" className="hidden" onChange={(e) => readerFile(e)} />
          </Label>
        </div>

        <div className="flex gap-10">
          <p className="flex h-[30px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
            {t("InfoBlock.text")}
          </p>

          <div className="mt-8 flex h-[450px] w-[526px] flex-col items-center  gap-2 overflow-auto rounded-[14px] bg-[#43445A] py-[10px] ">
            {whatIs === "EditProduct" || whatIs === "AddProduct" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="description" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="price" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="restaurant" inputType="text" options={formatedSelectOption} />
              </>
            ) : whatIs === "AddRestaurant" || whatIs === "EditRestaurant" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="cuisine" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="deliveryPrice" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="deliveryMin" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="address" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="category" inputType="text" options={formatedSelectOption} />
              </>
            ) : whatIs === "AddCategory" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
              </>
            ) : whatIs === "AddOffer" || whatIs === "EditOffer" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="title" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="description" inputType="text" />
              </>
            ) : whatIs === "EditCategory" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="slug" inputType="text" />
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex w-full gap-10 border-t-2 p-[20px]">
          <button
            type="button"
            onClick={() => form.reset()}
            className="box-border h-[50px] w-[400px] rounded-lg border-2 border-solid border-[#38394e] bg-[#43445a] text-white"
          >
            {t("cancelBtn")}
          </button>
          <button type="submit" className="box-border h-[50px] w-[400px] rounded-lg border-2 border-[#c035a2] bg-[#c035a2] text-white">
            {t("submitBtn")}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default Myform;

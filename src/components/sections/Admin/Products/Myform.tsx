"use client";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { useForm } from "react-hook-form";
import Image from "next/image";
import MyFormLabel from "./MyFormLabel";
import { Form } from "@ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@settings/zodSchemes";
import { z } from "zod";
import { useTranslations } from "next-intl";
import React from "react";

interface IMyform {
  whatIs: string;
}

interface IMyFormValues {
  File: FileList;
  Name: string;
  Description: string;
  Price: number;
  Restaurants: string;
}
const Myform: React.FC<IMyform> = ({ whatIs }): JSX.Element => {
  const [file, setFile] = React.useState<File | null>(null);
  const [fileUrl, setFileUrl] = React.useState<string | null>(null);
  let t: any;
  switch (whatIs) {
    case "EditProduct":
      t = useTranslations(`Admin.Products.EditProduct.Sheet`);
      break;
    case "AddProduct":
      t = useTranslations(`Admin.Header.Sheet`);
      break;
    case "EditCategory":
      t = useTranslations(`Admin.Category.EditCategory.Sheet`);
      break;
    case "AddCategory":
      t = useTranslations(`Admin.Category.AddCategory.Sheet`);
      break;
    case "AddRestaurant":
      t = useTranslations(`Admin.Restaurants.AddRestaurant.Sheet`);
      break;
    default:
      t = useTranslations(`Admin.Header.Sheet`);
      break;
  }

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

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      Name: "",
      Description: "",
      Price: 0,
      Restaurants: "",
      File: null,
    },
  });

  const submit = (v: IMyFormValues) => {
    console.log(v);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-8 overflow-auto">
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <p className="flex h-[32px] w-[252px] items-center text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
              {t("imageBlock.description")}
            </p>
            {fileUrl && <Image src={fileUrl} width={154} height={125} alt="upload" />}
          </div>
          <Label className="mt-8 flex h-[100px] w-[526px] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#43445A]">
            <Image src="/Form/uploadFile.svg" width={60} height={40} alt="upload" priority />
            <p className="text-[18px] font-medium leading-[24px] text-[#C7C7C7]"> {file ? file.name : t("imageBlock.label")}</p>
            <Input type="file" className="hidden" {...form.register("File")} onChange={(e) => readerFile(e)} />
          </Label>
        </div>

        <div className="flex gap-10">
          <p className="flex h-[30px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
            {t("InfoBlock.text")}
          </p>

          <div className="mt-8 flex h-[450px] w-[526px] flex-col items-center  gap-2 rounded-[14px] bg-[#43445A] py-[10px]">
            {whatIs === "EditProduct" || whatIs === "AddProduct" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="description" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="price" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="restaurants" inputType="text" options={["Mc Donalds", "Papa Johns", "Pizza Mizza"]} />
              </>
            ) : whatIs === "AddRestaurant" || whatIs === "EditRestaurant" ? (
              <>
                <MyFormLabel whatIs={whatIs} form={form} name="name" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="cuisine" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="price" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="deliveryMin" inputType="number" />
                <MyFormLabel whatIs={whatIs} form={form} name="adress" inputType="text" />
                <MyFormLabel whatIs={whatIs} form={form} name="category" inputType="text" options={["Fast food", "Pizza", "Steak", "Coffee"]} />
              </>
            ) : whatIs === "AddCategory" || whatIs === "EditCategory" ? (
              "buraya form gelecek"
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

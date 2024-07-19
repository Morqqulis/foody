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

interface IMyform {
  title: string;
}

interface IMyFormValues {
  File: FileList;
  Name: string;
  Description: string;
  Price: number;
  Restaurants: string;
}
const Myform: React.FC<IMyform> = ({ title }): JSX.Element => {
  const t = useTranslations("Admin.Products.EditProduct.Sheet");

  const labels = [
    {
      id: 0,
      name: "name",
      inputType: "text",
    },
    {
      id: 1,
      name: "description",
      inputType: "text",
    },
    {
      id: 2,
      name: "price",
      inputType: "number",
    },
    {
      id: 3,
      name: "restaurants",
      inputType: "text",
      options: ["Mc Donalds", "Papa Johns", "Pizza Mizza"],
    },
  ];

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
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-8">
        <div className="flex gap-10">
          <p className="flex h-[32px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
            {t("imageBlock.title")}
          </p>

          <Label className="mt-8 flex h-[100px] w-[526px] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#43445A]">
            <Image src="/Form/uploadFile.svg" width={60} height={40} alt="upload" priority />
            <p className="text-[18px] font-medium leading-[24px] text-[#C7C7C7]"> {t("imageBlock.label")}</p>
            <Input type="file" className="hidden" {...form.register("File")} />
          </Label>
        </div>

        <div className="flex gap-10">
          <p className="flex h-[30px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
            {t("InfoBlock.text")}
          </p>

          <div className="mt-8 flex h-[450px] w-[526px] flex-col items-center  gap-2 rounded-[14px] bg-[#43445A] py-[10px]">
            {labels.map((label) => (
              <MyFormLabel form={form} name={label.name} inputType={label.inputType} key={label.id} options={label.options} id={label.id} />
            ))}
            {/* <MyFormLabel form={form} name="name" inputType="text" />
            <MyFormLabel form={form} name="description" inputType="text" />
            <MyFormLabel form={form} name="price" inputType="number" />
            <MyFormLabel form={form} name="restaurants" inputType="text" options={["Mc Donalds", "Papa Johns", "Pizza Mizza"]} /> */}
          </div>
        </div>

        <div className="flex w-full gap-10 border-t-2 p-[20px]">
          <button
            type="button"
            onClick={() => form.reset()}
            className="box-border h-[50px] w-[400px] rounded-lg border-2 border-solid border-[#38394e] bg-[#43445a] text-white"
          >
            Cancel
          </button>
          <button type="submit" className="box-border h-[50px] w-[400px] rounded-lg border-2 border-[#c035a2] bg-[#c035a2] text-white">
            Save
          </button>
        </div>
      </form>
    </Form>
  );
};

export default Myform;

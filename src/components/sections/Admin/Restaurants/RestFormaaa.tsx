"use client";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { useForm } from "react-hook-form";
import Image from "next/image";
interface Restform {
    title: string;
}

interface RestformValues {
    file: FileList;
    name: string;
    Cuisine: string;
    price: number;
    rest: string;
}
const Restform: React.FC<Restform> = ({ title }): JSX.Element => {
    const { handleSubmit, register, reset } = useForm();

    const submit = (v: RestformValues) => {
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-20">
            <div className="flex gap-10">
                <p className="flex h-[32px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
                    Upload your product image
                </p>

                <Label className="mt-8 flex h-[100px] w-[526px] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#43445A]">
                    <Image src="/Form/uploadFile.svg" width={60} height={40} alt="upload" priority />
                    <p className="text-[18px] font-medium leading-[24px] text-[#C7C7C7]">Upload</p>
                    <Input type="file" className="hidden" {...register("file")} />
                </Label>
            </div>

            <div className="flex gap-10">
                <p className="flex h-[30px] w-[252px] flex-row items-center text-left text-[18px] font-medium leading-[24px] text-[#C7C7C7]">
                    Add your Product description and necessary information
                </p>

                <div className="mt-8 flex h-[450px] w-[526px] flex-col items-center  gap-4 rounded-[14px] bg-[#43445A] py-[10px] overflow-auto">

                    <Label className="flex w-[450px] flex-col gap-1">
                        <p className="h-[32px] w-[245] text-[16px] font-medium leading-[24px] text-[#C7C7C7]">Name</p>

                        <Input
                            type="text"
                            {...register("name")}
                            className="h-[46px] w-[450px] rounded-[14px] border-none bg-[#5A5B70] text-[#F2F2F2] outline-none ring-0"
                        />
                    </Label>

                    <Label className="flex w-[450px] flex-col gap-1">
                        <p className="h-[32px] w-[245px] text-[16px] font-medium leading-[24px] text-[#C7C7C7]">Cuisine</p>

                        <textarea
                            {...register("name")}
                            className="h-[46px] w-[450px] resize-none rounded-[14px] border-none  bg-[#5A5B70] p-3 text-[#F2F2F2] "
                        />
                    </Label>

                    <Label className="flex w-[450px] flex-col gap-1">
                        <p className="h-[32px] w-[245] text-[16px] font-medium leading-[24px] text-[#C7C7C7] ">Delivery Price $</p>

                        <Input
                            type="number"
                            step="0.01"
                            {...register("price")}
                            className="h-[46px] w-[450px] appearance-none rounded-[14px] border-none bg-[#5A5B70] text-[#F2F2F2]"
                        />
                    </Label>


                    <Label className="flex w-[450px] flex-col gap-1">
                        <p className="h-[32px] w-[245] text-[16px] font-medium leading-[24px] text-[#C7C7C7] ">Delivery Minute</p>

                        <Input
                            type="number"
                            step="0.01"
                            {...register("price")}
                            className="h-[46px] w-[450px] appearance-none rounded-[14px] border-none bg-[#5A5B70] text-[#F2F2F2]"
                        />
                    </Label>

                    <Label className="flex w-[450px] flex-col gap-1">
                        <p className="h-[32px] w-[245.27px] text-[16px] font-medium leading-[24px] text-[#C7C7C7] ">Category </p>
                        <select {...register("rest")} className=" h-[46px] w-[450px] appearance-none rounded-[14px] border-none bg-[#5A5B70] p-3 text-[#F2F2F2] ">

                            <option value=" Fast Food" className="text-[#F2F2F2] text-center uppercase">
                                Fast Food
                            </option>
                            <option value="Pizza" className="text-[#F2F2F2]">
                                Pizza
                            </option>
                            <option value="Steak" className="text-[#F2F2F2]">
                                Steak
                            </option>
                            <option value="Coffee" className="text-[#F2F2F2]">
                                Coffee
                            </option>

                        </select>
                    </Label>
                </div>
            </div>

            <div className="flex w-full gap-10 border-t-2 p-[20px]">
                <button
                    type="button"
                    onClick={() => reset()}
                    style={{
                        width: "400px",
                        height: "50px",
                        boxSizing: "border-box",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: "rgb(56, 57, 78)",
                        borderRadius: "14px",
                        backgroundColor: "rgb(67, 68, 90)",
                        color: "white",
                    }}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    style={{
                        width: "400px",
                        color: "white",
                        height: "50px",
                        boxSizing: "border-box",
                        border: "2px solid rgb(192, 53, 162)",
                        borderRadius: "14px",
                        backgroundColor: "rgb(192, 53, 162)",
                    }}
                >
                    Create
                </button>
            </div>
        </form>
    );
};

export default Restform;

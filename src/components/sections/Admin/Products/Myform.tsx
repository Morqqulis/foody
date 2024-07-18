"use client";
import { Input } from "@ui/input";
import { useForm } from "react-hook-form";

interface IMyform {}

const Myform: React.FC = (): JSX.Element => {
  const { handleSubmit, register } = useForm();

  const submit = (v: any) => {
    console.log(v);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input type="password" {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Myform;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminLoginSchema } from "@settings/zodSchemes";
import { Button } from "@ui/button";
import { Form } from "@ui/form";
import { Input } from "@ui/input";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IAdminForm {
  username: string;
  password: string;
}

const AdminForm: React.FC = (): JSX.Element => {
  const form = useForm<z.infer<typeof AdminLoginSchema>>({
    resolver: zodResolver(AdminLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function submit(v: IAdminForm) {
    console.log(v);
    form.reset();
  }
  const t = useTranslations("Admin.Login");
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-8 overflow-auto">
        <Input
          className="h-[50px] w-[319px] rounded-md border-none bg-[#5A5B70] text-white placeholder:text-white"
          placeholder={t("username")}
          {...form.register("username")}
        />
        <Input
          className="h-[50px] w-[319px]  rounded-md border-none bg-[#5A5B70] text-white placeholder:text-white"
          placeholder={t("password")}
          {...form.register("password")}
        />

        <Button className="w-[319px] rounded-md bg-[#c035a2]" type="submit">
          {t("btn")}{" "}
        </Button>
      </form>
    </Form>
  );
};

export default AdminForm;

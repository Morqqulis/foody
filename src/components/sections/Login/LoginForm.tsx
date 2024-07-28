"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema, SignUpFormSchema } from "@settings/zodSchemes";
import { Button } from "@ui/button";
import { Form } from "@ui/form";
import { useToast } from "@ui/use-toast";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkUser, getDocuments } from "../../../utls/functions";
import Loader from "./Loader";
import LoginFormField from "./LoginFormField";
import { account, collections, databases, dbId } from "@libs/appwrite/config";

interface ILoginForm {
  name: "login" | "register";
}

const LoginForm: React.FC<ILoginForm> = ({ name = "login" }: ILoginForm): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const setSchema = (name: "login" | "register") => (name === "login" ? SignInFormSchema : SignUpFormSchema);
  const schema = setSchema(name);
  const router = useRouter();
  const { toast } = useToast();
  const [session, setSession] = useState(false);

  const setDefaultValues = () => (name === "login" ? { email: "", password: "" } : { fullName: "", userName: "", email: "", password: "" });

  const t = useTranslations("Login");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: setDefaultValues(),
  });

  const handleLogin = async (data: z.infer<typeof SignInFormSchema>) => {
    // setIsLoading(true);
    // try {
    //   const { email, password } = data;
    //   const { $id } = await checkUser(email, password);
    //   $id && (await editDocuments(collections.userId, { enter: true }, null, $id));
    //   setTimeout(() => {
    //     router.push("/user");
    //   }, 2000);
    //   form.reset();
    //   toast({
    //     title: "Congratulations",
    //     description: `Sign In Succesfull`,
    //     variant: "dark",
    //     duration: 2000,
    //   });
    //   setIsLoading(false);
    // } catch (error) {
    //   toast({ title: "Sign In Failed", description: `You have some Error >: ${error.message}}`, variant: "destructive", duration: 2000 });
    //   setIsLoading(false);
    // }
    // if (session) {
    //   router.push("/user");
    //   setSession(false)
    // } else {

    const loggedIn = await account.createEmailPasswordSession(data.email, data.password);
    
  };

  const handleResigter = async (data: z.infer<typeof SignUpFormSchema>) => {
    console.log(data);

    // setIsLoading(true);

    // const { isExist } = await checkUser(data.email, data.password);

    // if (!isExist) {
    //   addDocuments(collections.userId, { ...data, enter: false }, null);

    //   toast({
    //     title: "Congratulations",
    //     description: `Sign Up Succesfull`,
    //     variant: "dark",
    //     duration: 2000,
    //   });
    //   form.reset();
    // } else {
    //   toast({
    //     title: "Sign Up Failed",
    //     description: `This user alredy exist`,
    //     variant: "destructive",
    //     duration: 2000,
    //   });
    // }
    // setIsLoading(false);
  };

  const onSubmit = async (values: z.infer<typeof schema>) => {
    switch (name) {
      case "login":
        handleLogin(values);
        break;
      case "register":
        handleResigter(values);
        break;
      default:
        () => toast({ title: "Enter Valid data", description: "You have some Error", variant: "destructive", duration: 2000 });
        form.reset();
        break;
    }
  };

  return (
    <Form {...form}>
      <form className={`flex flex-col gap-[25px] px-10 `} onSubmit={form.handleSubmit((data) => onSubmit(data))}>
        {name === "register" && (
          <>
            <LoginFormField form={form} inputType={"text"} name={"fullName"} placeholder="John Doe" />
            <LoginFormField form={form} inputType={"text"} name={"userName"} placeholder="john_doe" />
          </>
        )}
        <LoginFormField form={form} inputType={"text"} name={"email"} placeholder="wqS6S@example.com" />
        <LoginFormField form={form} inputType={"password"} name={"password"} placeholder="********" />

        <Button className={`h-full bg-normal-red py-3 text-xl font-medium text-white md:py-4`} type={"submit"} aria-label={t("form.btnSignIn")}>
          {name === "login" ? t("form.btnSignIn") : t("form.btnSignUp")}
        </Button>
        {isLoading && <Loader />}
      </form>
    </Form>
  );
};

export default LoginForm;

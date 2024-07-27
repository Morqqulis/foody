"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "@settings/constants";
import { SignInFormSchema, SignUpFormSchema } from "@settings/zodSchemes";
import { Button } from "@ui/button";
import { Form } from "@ui/form";
import { useToast } from "@ui/use-toast";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addDocuments, addUsers, checkUser, deleteDocument, editDocuments, getListDocuments, multiFn } from "../../../utls/functions";
import LoginFormField from "./LoginFormField";
import { useRouter } from "next/navigation";
import { account, collections, databases, dbId, ID } from "@libs/appwrite/config";
import { useEffect, useState } from "react";
import Loader from "./Loader";
// const BASEURL = "https://foody-api-seven.vercel.app";
// const SIGNIN_URL = `${BASEURL}/api/auth/signin`;
// const SIGNUP_URL = `${BASEURL}/api/auth/signup`;

interface ILoginForm {
  name: "login" | "register";
}

const LoginForm: React.FC<ILoginForm> = ({ name = "login" }: ILoginForm): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const setSchema = (name: "login" | "register") => (name === "login" ? SignInFormSchema : SignUpFormSchema);
  const schema = setSchema(name);
  const router = useRouter();
  const { toast } = useToast();

  // console.log((async () => await getListDocuments(collections.userId))());

  const setDefaultValues = () => (name === "login" ? { email: "", password: "" } : { fullName: "", userName: "", email: "", password: "" });

  const t = useTranslations("Login");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: setDefaultValues(),
  });
  // deleteDocument(collections.userId, "66a3c94d00250bfb62dc");
  // users.documents.map((user: any) => deleteDocument(collections.userId, user.$id));
  // account.deleteSessions()

  const handleLogin = async (data: z.infer<typeof SignInFormSchema>) => {
    setIsLoading(true);
    // const { $id } = await checkUser(data.email, data.password);

    // $id && (await editDocuments(collections.userId, { enter: true }, null, $id));

    // try {
    //   const { email, password } = data;

    //   form.reset();
    //   setTimeout(() => {
    //     // router.push("/user");
    //   }, 2000);
    //   toast({
    //     title: "Congratulations",
    //     description: `Sign In Succesfull`,
    //     variant: "dark",
    //     duration: 2000,
    //   });
    // } catch (error) {
    //   toast({ title: "Sign In Failed", description: `You have some Error >: ${error.message}}`, variant: "destructive", duration: 2000 });
    //   console.log(error);
    // }
    try {
      const { email, password } = data;

      const currentSession = await account.get();
      console.log(currentSession);

      if (currentSession.email === email) {
        return router.push("/");
      } else {
        account.deleteSessions();
      }

      const response = await account.createEmailPasswordSession(email, password);
      response && router.push("/user");
      setIsLoading(false);
    } catch (error) {
      console.error("Login failed:", error);

      toast({ title: "Sign In Failed", description: error.message, variant: "destructive", duration: 3000 });
      setIsLoading(false);
    }
  };

  const handleResigter = async (data: z.infer<typeof SignUpFormSchema>) => {
    setIsLoading(true);
    const { email, password, userName } = data;

    // const { isExist } = await checkUser(data.email, data.password);

    // if (!isExist) {
    // addDocuments(collections.userId, { ...data, enter: false }, null);

    //   form.reset();
    //   toast({
    //     title: "Congratulations",
    //     description: `Sign Up Succesfull`,
    //     variant: "dark",
    //     duration: 2000,
    //   });
    // } else {
    //   toast({
    //     title: "Sign Up Failed",
    //     description: `This user alredy exist`,
    //     variant: "destructive",
    //     duration: 2000,
    //   });
    // }

    try {
      const user = await account.create(ID.unique(), email, password, userName);
      await addUsers(user.$id, data);

      console.log(user);

      form.reset();

      toast({
        title: "Congratulations",
        description: `Sign Up Succesfull`,
        variant: "dark",
        duration: 2000,
      });
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Sign Up Failed",
        description: error.message,
        variant: "destructive",
        duration: 2000,
      });
      setIsLoading(false);
    }
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

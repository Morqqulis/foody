import { zodResolver } from "@hookform/resolvers/zod"
import { SignInFormSchema, SignUpFormSchema } from "@settings/zodSchemes"
import { Button } from "@ui/button"
import { Form } from "@ui/form"
import { useToast } from "@ui/use-toast"
import axios from "axios"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LoginFormField from "./LoginFormField"

// const BASEURL = "https://foody-api.vercel.app";
// const SIGNIN_URL = `${BASEURL}/api/auth/signin`;
// const SIGNUP_URL = `${BASEURL}/api/auth/signup`;

interface ILoginForm {
  name: "login" | "register";
}

const LoginForm: React.FC<ILoginForm> = ({ name = "login" }: ILoginForm): JSX.Element => {
  const setSchema = (name: "login" | "register") => (name === "login" ? SignInFormSchema : SignUpFormSchema);
  const schema = setSchema(name);

  const { toast } = useToast();

  const setDefaultValues = () => (name === "login" ? { email: "", password: "" } : { fullName: "", userName: "", email: "", password: "" });

  const t = useTranslations("Login");

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: setDefaultValues(),
  });

  const handleLogin = async (data: z.infer<typeof SignInFormSchema>) => {
    try {
      const res = await axios.post("/api/signin", data);
      console.log(await res.data);

      toast({ title: "Sign In Success", description: `You have successfully signed in`, variant: "dark", duration: 2000 });
      form.reset();
    } catch (error) {
      toast({ title: "Sign In Failed", description: `You have some Error >: ${error.message}}`, variant: "destructive", duration: 2000 });
      console.log(error);
    }
  };

  const handleResigter = async (data: z.infer<typeof SignUpFormSchema>) => {
    const user = { fullName: data.fullName, userName: data.userName, email: data.email, password: data.password };

    try {
      const res = await axios.post("/api/signup", user);
      toast({ title: `${res.data.message}`, description: `You have successfully signed up`, variant: "dark", duration: 2000 });
      form.reset();
      console.log(await res.data);
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign Up Failed",
        description: `You have some Error...}`,
        variant: "destructive",
        duration: 2000,
      });
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
      <form className={`flex flex-col gap-[25px] px-10`} onSubmit={form.handleSubmit((data) => onSubmit(data))}>
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
      </form>
    </Form>
  );
};

export default LoginForm;

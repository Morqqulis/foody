import { NextPage } from "next";
import AdminLogin from "./com/AdminLogin";
interface ISignInPage {}

const SignInPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <AdminLogin />
    </main>
  );
};

export default SignInPage;

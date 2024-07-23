import HeaderLanguages from "@sections/Header/HeaderLangs";
import Image from "next/image";
import AdminForm from "./AdminForm";
import { useTranslations } from "next-intl";

interface IadminLogin {}

const AdminLogin: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Login");
  return (
    <div className="flex h-[412px] w-[830p]">
      <div className="flex h-full w-[425px] flex-col gap-11 items-center justify-between p-8">
        <h2 className={` h-fit w-full text-[33px] font-bold text-center  text-gray-400`}>{t("title")}</h2>
        <AdminForm />
      </div>
      <div className="h-full w-[405px] bg-white">
        <div className="W-full flex h-[60px] flex-col items-end justify-center pr-2">
          <HeaderLanguages />
        </div>
        <div className="flex h-[360px] w-full items-center justify-center">
          <Image src="/Admin/login.svg" alt="admin" width={345} height={303} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

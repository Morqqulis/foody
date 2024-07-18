import HeaderLanguages from "@sections/Header/HeaderLangs";
import { Button } from "@ui/button";
import Logo from "@ui/Logo";
import { useTranslations } from 'next-intl'
import Image from "next/image";

interface IAdminHeader {}

const AdminHeader: React.FC = (): JSX.Element => {
    const t = useTranslations('Admin.Header')
  return (
    <header className={`mb-[18px] rounded-b-[20px] bg-[#27283C] p-3`}>
      <nav className={`flex items-center justify-between gap-5`}>
        <Logo className={`hover:scale-105`} color={"white"} />
        <div className={`flex items-center gap-4`}>
          <Button
            className={`flex items-center gap-2 rounded-[18px] border-[2px] border-[#C035A2] bg-[#C035A2] text-[10px] font-bold uppercase leading-[21px] text-white shadow-[0px_4px_4px_0px_rgb(39_174_96)/25%]`}
            type={"button"}
          >
            <span className={`text-lg`}>+</span>
            {t('btn')}
          </Button>
          <HeaderLanguages />
          <div className={`flex items-center gap-2 text-white`}>
            <Image className={``} src="/Admin/Header/admin.svg" alt={"admin icon"} width={40} height={40} />
            <span className={`translate-y-[10px]`}>{t('admin')}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;

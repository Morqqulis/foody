import HeaderLanguages from '@sections/Header/HeaderLangs'
import Image from 'next/image'
import AdminForm from './AdminForm'
import { useTranslations } from 'next-intl'

interface IadminLogin {}

const AdminLogin: React.FC = (): JSX.Element => {
  const t = useTranslations('Admin.Login')
  return (
    <section className="flex min-h-[412px] w-[830px] gap-12 mmd:container mmd:flex-col-reverse mmd:items-center ">
      <div className="flex h-full w-[425px] flex-col items-center justify-between gap-11 p-8 mmd:gap-6">
        <h2 className={`h-fit text-center text-[33px] font-bold text-gray-400  md:w-full`}>{t('title')}</h2>
        <AdminForm />
      </div>
      <div className="h-full min-w-[405px] md:bg-white">
        <div className="flex h-[60px] w-full flex-col items-end justify-center pr-2 mmd:hidden">
          <HeaderLanguages />
        </div>
        <div className="flex h-[360px] w-full items-center justify-center ">
          <Image src="/Admin/login.svg" alt="admin" width={345} height={303} />
        </div>
      </div>
    </section>
  )
}

export default AdminLogin
